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
    console.log("hiii")
     var data = getdatafromrest(function(data){
         rest.write(data);
         rest.end();
     })
     //rest.get('http://localhost:5984/mycompany', {
      //  "username": "saurabh",
       // "password": "rajukumar@123"

    //})

    
})

console.log("starting");
app.listen(8080, function () {
    console.log("Server started");
});




////server.js
