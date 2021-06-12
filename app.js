const express = require('express');
const bodyParser = require('express');

const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});