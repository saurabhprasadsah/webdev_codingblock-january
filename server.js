

const express = require('express') //express
const fs = require("fs")   //file system
const app = express()

app.get('/', (req,res)=>{
    fs.readFile('app.json','utf-8', function(err,data){
        console.log(data);    
        res.send(data)
    });    
})

app.get('/get', (req,res)=>{
    res.send('get request')
})

app.listen(3233) 

//// port number 3233

