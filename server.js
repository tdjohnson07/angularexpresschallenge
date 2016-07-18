var express= require('express');
var index=require('./routes/index');
var students=require('./routes/students');
var app= express();

//static files
app.use(express.static('public'));
//routes
app.use('/', index);
app.use('/students', students)

var server=app.listen(3000, function(){
  var port=server.address().port;
  console.log("listening on port", port);
})
