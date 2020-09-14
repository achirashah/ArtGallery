const express = require('express');
const bodyParser = require('body-parser');
const app = require('./routes/app.route');
const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use('/v1',app);

let port = 3000;

server.use(function(req, res, next){
if (req.accepts('html')) {
    res.status(406).send({message:"Not Acceptable"}) ;
    return;
      }
    });
server.listen(port,()=>{
console.log('Server is up and running on port number' + port);

});


module.exports = server;