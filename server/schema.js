const mongoose = require('mongoose')
const {Schema} = mongoose

const posts = new Schema({
    "title":String,
    "description":String,
    "likes":Number,
    "comments":Array
})

module.exports = mongoose.model('post',posts)
