var express = require('express');
var app = express();
var port = 1350;
if (process.env.NODE_ENV == 'production') {
  port = 1350;
}
if (process.env.PORT) {
  port = process.env.PORT;
}

app.use('/images', express.static(__dirname + '/images'));
app.use('/pages', express.static(__dirname + '/pages'));
app.use('/tpl', express.static(__dirname + '/tpl'));

app.all('/*', function (req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
   res.sendFile('index.html', { root: __dirname + '/' });
 
    });

  app.listen(port); //the port you want to use
  console.log('App started at port :' + port);
