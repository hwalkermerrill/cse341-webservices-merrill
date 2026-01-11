var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/', require('./routes/index'));

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});