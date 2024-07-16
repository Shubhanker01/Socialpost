const express = require('express')
const router = express.Router()
const {formidable} = require('formidable')

router.post('/post', async (req, res, next) => {
    const form = formidable({})
    form.parse(req, (err, fields, files) => {
        console.log(req)
        if (err) {
            next(err)
            return;
        }
        res.json({ fields, files })
    })
})

module.exports = router