const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const cors = require('cors')
const port = 3000
const post = require('./Routes/addpost')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.get('/', (req, res) => {
    res.send("This is too much")
})

app.use('/',post)

async function main() {
    mongoose.connect(process.env.URI)
}
main().then(() => {
    console.log('successfully connected')
}).catch((err) => {
    console.log(err)
})

app.listen(port, () => {
    console.log(`App is listening on the port:${port}`)
})
