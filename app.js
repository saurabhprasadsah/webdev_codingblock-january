var rest = require('restler');
var express = require("express");
var app = express();
app.use(express.json())

app.get("/getData", function (clientReq, clientRes) {

    var id = clientReq.query.docId;
    rest.get('http://localhost:5984/mycompany/'+id, {
        "username": "",
        "password": ""

    }).on('complete', function (result) {
        if (result instanceof Error) {
            //console.log('Error:', result.message);
            clientRes.write('{"error":true, "reason": result.message}');
            clientRes.end();
        } else {
            //console.log(result);
            clientRes.write(JSON.stringify(result));
            clientRes.end();
        }
    });


});
app.post("/postdata", function(clientReq,clientRes){
    //console.log("hiii")
    console.log(clientReq.body)
    clientRes.write("hello post method");
       
     rest.put('http://localhost:5984/mycompany/'+ clientReq.body._id, {
        "username": "",
        "password": "",

        data: JSON.stringify(clientReq.body),
        headers : {
            'Content-Type' : 'application/json'
        }})
        .on('complete', function(data, response) {
            clientRes.write(JSON.stringify(data));
            clientRes.end();
        });


   

console.log("starting");
app.listen(8080, function () {
    console.log("Server started");
});




////server.js
