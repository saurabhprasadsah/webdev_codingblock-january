var rest = require('restler');
 
rest.get('http://localhost:5984/mycompany/1ba2c5b5d902c63d6ec8b6b67600631d', {
"username": "",
"password": ""

}).on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
  } else {
    console.log(result);
  }
});
