const express = require('express')
const router = express.Router()
const posts = require('../schema.js')

router.post('/post', async (req, res) => {
    try {
        await posts.create({
            "title": req.body.caption,
            "description": req.body.description
        })
        res.send("post added successfully")
    }
    catch (err) {
        console.log(err)
    }

})

router.get('/getm', async (req, res) => {
    let data = await posts.find({})
    res.send(data)
})



module.exports = router