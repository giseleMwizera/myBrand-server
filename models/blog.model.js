const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type:String,
        require: [true, 'A blog should have a title']
    }, 
    content: {
        type: String, 
        require: [true, 'A blog should have content']
    }, 
    coverPhoto:  {
        type:String,
        require: [true, 'A blog should have a cover phot']
    },
    comments: [Object],
    likes: {
        type: Number
    }
})

module.exports = mongoose.model('Blog', blogSchema);