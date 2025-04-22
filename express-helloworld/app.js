var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars, Jorge González Medina!\n');
});

app.get('/pluton', function (req, res) {
  res.send('Hello Pluton, Jorge González Medina!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

