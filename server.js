// server.js
// where your node app starts

// init project
var express = require('express');
var jsxCompile = require('express-jsx');
var app = express();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(jsxCompile(require('path').join(__dirname, 'public')));
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  const Kringle = require('./kringle.js')
  let k = new Kringle([
  {name: 'chlo', email: 'chlo@baz.com', group:'chlavid'},
  {name: 'dave', email: 'dave@foo.com', group:'chlavid'},
  {name: 'david', email: 'david@bar.com', group:'swedes'},
  {name: 'xandy', email: 'xandy@bar.com', group:'swedes'},
  {name: 'lorn', email: 'lorn@baz.com', group:'chorna'},
  {name: 'char', email: 'char@foo.com', group:'chorna'},
  {name: 'sam', email: 'sam@bar.com', group:'sam'},
])
  k.run();//k.run();k.run()
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/send/"+process.env.SECRET_TO, function (request, response) {
const msg = {
  to: process.env.SECRET_TO,
  from: process.env.SECRET_TO,
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
