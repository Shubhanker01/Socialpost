const mongoose = require('mongoose')
const {Schema} = mongoose

const posts = new Schema({
    "title":String,
    "image":String,
    "description":String,
    "likes":Number,
    "comments":Array
})

module.exports = mongoose.model('post',posts)
