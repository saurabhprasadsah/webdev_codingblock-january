const express = require('express')

const app = express()


app.get('/',(req, res)=>{
    res.send('<h1 style="color: red;"> Hello world</h1>')
})
app.get('/greet',(req, res)=>{

    console.log(req.headers)
    res.send('Good morning')
})
app.get('/forms',(req,res)=>{
    res.send('C:\Users\saurabh kumar\Desktop\Web dev class\webdev_codingblock-january\Express\forms\forms.html')
       

})



app.listen(4444,()=>{
    console.log('server start on http://localhost:4444')
})


//port(4444) pass 
