const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const users = require('./routers/users')
app.use(bodyParser.json())
app.use('/api/users', users)

app.listen(3030, (req,res) => {
    console.log("运行在3030 端口");
    
})