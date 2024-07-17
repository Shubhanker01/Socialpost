const express = require('express')
const router = express.Router()
const posts = require('../schema.js')

// to create a new post
router.post('/post', async (req, res) => {
    try {
        await posts.create({
            "title": req.body.caption,
            "description": req.body.description,
            "likes": 0
        })
        res.send("post added successfully")
    }
    catch (err) {
        console.log(err)
    }

})

// to get all the posts by the user
router.get('/getposts', async (req, res) => {
    try {
        let data = await posts.find({})
        res.send(data)
    }
    catch (err) {
        console.log(err)
    }
})

// delete post
router.delete('/delete/:id', async (req, res) => {
    try {
        await posts.findByIdAndDelete(req.params.id)
        res.send("Your post is successfully deleted")
    }
    catch (err) {
        console.log(err)
    }
})


// updating post
router.post('/update/:id', async (req, res) => {
    try {
        await posts.findByIdAndUpdate(req.params.id, { title: req.body.title, description: req.body.description })
        res.send("Your post is updated successfully")
    } catch (error) {
        console.log(error)
    }
})

// updating likes of the post
router.post('/likes/:id', async (req, res) => {
    try {
        let data = await posts.findById(req.params.id)
        data.likes = data.likes + 1
        await data.save()
        res.send("You liked this post")
    } catch (error) {
        console.log(error)
    }
})

// adding the comments to the post
router.post('/comments/:id', async (req, res) => {
    try {
        let data = await posts.findById(req.params.id)
        data.comments.push(req.body.comment)
        await data.save()
        res.send("You added a comment")
    } catch (error) {
        console.log(error)
    }
})

// getting comments
router.get('/showcomments/:id',async (req,res)=>{
    try {
        let data = await posts.findById(req.params.id)
        res.send(data.comments)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router