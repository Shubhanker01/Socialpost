const express = require('express')
const router = express.Router()
const posts = require('../schema.js')

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
module.exports = router