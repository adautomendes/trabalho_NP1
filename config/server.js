const restify   = require('restify');
const port      = 5000;
const server    =restify.createServer();

server.use(restify.plugins.bodyParser({
    mapParams:true,
    mapFiles:false,
    overrideParams:false
}));

server.use(restify.plugins.queryParser());

module.exports = {server, port};