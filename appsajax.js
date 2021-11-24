var rest = require('restler');
var express = require("express");
const path = require('path');

var app = express();
app.use(express.json())
app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
  

app.get("/getData", function (clientReq, clientRes) {

    var id = clientReq.query.docId;
    rest.get('http://localhost:5984/mycompany/'+id, {
        "username": "saurabh",
        "password": "rajukumar@123"

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

console.log("starting");
app.listen(8080, function () {
    console.log("Server started");
});
