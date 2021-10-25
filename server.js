const express = require('express');
const app = express()
const cors = require('cors');
const needle = require('needle');
const router = express.Router()

app.use(cors())

app.get('/hello', async (req,res) => {
    const response = await needle('get','https://slack.com/intl/en-in/')
    res.status(200).send(response.body)
})
app.listen(5000, () => {
    console.log('server up')
})