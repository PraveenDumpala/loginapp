var PORT = 7980;

var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// default route
app.get('/',function(req,res) {
  res.sendFile(__dirname + '/public/views/demoApp.html');
});

// Authentication
function auth(username, password) {
  if(username === 'admin' && password === 'admin@123') {
    return true;
  } else {
    return false;
  }
} // end of Authentication

// route for '/login'
app.post('/login',function(req,res) {
  var username=req.body.uname;
  var password=req.body.psw;
  var authStatus = auth(username, password);
  if(authStatus) {
    res.end('Valid User');
  } else {
    res.end('Invalid User');
  }
}); // end of route for '/login'

// Configuring Server
app.listen(PORT,function() {
  console.log("[ INFO ] - Server Started and listening at: ",PORT);
}); // end
