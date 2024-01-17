const express = require('express')
const app = express()
const PORT =  process.env.PORT || 4001
// const routes = require('./routes')
const os = require('os')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(routes)

app. get('/', async (req, res) => {
    res.send('Running in OS'+ os.type())
})

app.listen(PORT, () => {
    console.log('app listen on port', PORT);
})