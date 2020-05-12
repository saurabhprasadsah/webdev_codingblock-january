const express = require('express')

const app = express()



app.get('/',(req, res)=>{
    res.send('<h1 style="color: red;"> Hello world</h1>')
})

app.listen(4444,()=>{
    console.log('server start on http://localhost:4444')
})