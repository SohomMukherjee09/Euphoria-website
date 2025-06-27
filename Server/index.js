const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 2000

const productRouter = require('./Routes/product')
const mongoose = require("mongoose")
const expressFileUpload = require("express-fileupload")
mongoose.connect("mongodb+srv://Sohom:Ss456123_@cluster0.371szjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(expressFileUpload())
app.use('/products',productRouter);
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)


})
