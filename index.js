var express = require('express')
var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/simon', function (req,res) {
    res.send("hello simon")
})

app.listen(8990, function () {
  console.log('Example app listening on port 8990!');
});
