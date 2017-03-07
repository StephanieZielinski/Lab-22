var express = require('express');
var app = express();
var randomStuff = require('./random');
// var lyrics = require('/lyrics');

app.use(express.static(__dirname + '/public'));

// app.get('/lyric'), function(req, res){
//   res.send(lyrics);
// };

app.get('/randomStuff', function (req, res){
  res.send(randomStuff);
});

var childOne = {
  name: 'Noah',
  age: 17,
  favFood: 'Cheeseburgers',
  school: 'The University of Detroit Jesuit High School and Academy',
  grade: '11th',
  sports: 'Varsity Swim',
  activities: 'ISC Pallbearer Minestry, Academic Integrity, Student Senate'

};


app.get('/noah', function (req, res) {
  res.send(childOne);
});

var childTwo = {
  name: 'Dane',
  age: 13,
  favFood: 'Sushi',
  school: 'The University of Detroit Jesuit High School and Academy',
  grade: '8th',
  sports: 'Academy Soccer, Academy Baseball',
  activities: 'Junior Student Senate',
  favShow: 'The Office and HIMYM'
};


app.get('/dane', function (req, res) {
  res.send(childTwo);
});

var childThree = {
  name: 'Ian',
  age: 12,
  favFood: 'Cupcakes',
  school: 'The University of Detroit Jesuit High School and Academy',
  grade: '7th',
  sports: 'Academy Track,',
  activities: 'UDJ Musical, Acting at Stagecrafters',
  favShow: 'Kids Baking Championship',
  img: 'https://www.facebook.com/photo.php?fbid=10154255352938347&set=t.556578346&type=3&size=720%2C960'
};

app.get('/ian', function (req, res) {
  res.send(childThree);
});
 


var server = app.listen(3000, function (){
  var port = server.address().port;
  console.log('Example app lisitening at http://localhost:%s', port);

});
