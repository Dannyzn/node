const getList = (author, keyword) => {
    // 只关心数据
    // 先返回假数据 (格式是正确的)
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1554573514342,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1554573514112,
            author: 'lisi'
        }
    ]
}

const getDetail  = (id) => {
    // 先返回假数据
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1554573514342,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含 title content 属性
    // console.log("newBlog blog data...",  blogData)
    return {
        id: 3 // 表示新建博客，插入到数据表里面的 id
    }
}

const updateBlog = (id, blogData = {}) => {
    // id 就是更新博客的 id
    // blogData 是一个博客对象，包含 title content 属性
    console.log('updata blog', id, blogData)
    return true
}

const delBlog = (id) => {
    // id 就是要删除博客的 id

    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}