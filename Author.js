const Post = require('./Post')

class Author {
    constructor(name) {
      this.name = name
      this.post = []
    }

    createpost(title, content) {
        const post = new Post(title, content, this)
        this.post.push(post)
        return post 
    }
}
module.exports = Author