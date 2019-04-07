const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const queryString = require('querystring')

// 用于处理 post data
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        // not post
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        // not json
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        // enter data
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })

    })
    return promise
}

const serverHandle = (req, res) => {
    // 设置返回格式 JSON
    res.setHeader('Content-type', 'application/json')


    // 获取 path 
    const url = req.url
    req.path = url.split('?')[0]

    // 解析 query
    req.query = queryString.parse(url.split('?')[1])

    // 处理 postData
    getPostData(req).then(postData => {
        req.body = postData

        // 处理 blog 路由
        const blogData = handleBlogRouter(req, res)
        if (blogData) {
            res.end(
                JSON.stringify(blogData)
            )
            return
        }
        
        // 处理 user 路由
        const userData = handleUserRouter(req, res)
        if (userData) {
            res.end(
                JSON.stringify(userData)
            )
            return
        }

        // 未命中路由 ，返回 404 （格式是纯文本）
        res.writeHead(404, {"Content-type": 'text/plain'})
        res.write("404 Not Found \n")
        res.end()
    })
}

module.exports = serverHandle