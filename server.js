const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()


app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Node API is here')
})

app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


mongoose.connect('mongodb+srv://admin:Jeremiah123@jayapi.rkgchnw.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, () => {
        console.log('Node app is running on port 3000')
    })
    console.log('Connected to mongoDB')
}).catch((error) => {
    console.log('error')
})