const express = require('express')

const app = express()


function m1 (req,res,next){
    console.log('Rinnig middleware 1')
    next()
}
function m2 (req,res,next){
    console.log('Rinnig middleware 1')
    next()
}
function m3 (req,res,next){
    console.log('Rinnig middleware 1')
    next()
}
function m4 (req,res,next){
    console.log('Rinnig middleware 1')
    next()
}
function m5 (req,res,next){
    console.log('Rinnig middleware 1')
    next()
}

app.get('/hello',m2,m3(req,res)=>{
    res.send('Hello world')
})



app.listen(4343,()=>{
    console.log('server on the http://localhost:4343')
})