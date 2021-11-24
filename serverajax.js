var express = require('express');
var path = require('path');
var request = require('ajax-request');
var router = express.Router();

router.get('/', function (req, res) {
    res.sendFile('/html/index.html');

});
function run() {

    // Creating Our XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    // Making our connection 
    var url = 'http://localhost:5984/mycompany/' + id;
    xhr.open("GET", url, true, "saurabh", "rajukumar@123");
    // function execute after request is successful
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }
    // Sending our request
    xhr.send();
}
run();

console.log("hello ajax");
