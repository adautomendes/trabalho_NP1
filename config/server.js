const restify   = require('restify');
const port      = 5000;
const server    =restify.createServer();

server.use(restify.plugins.bodyParser({
    mapParams:true,
    mapFiles:false,
    overrideParams:false
}));

server.get('/', (request, response, next) => {
    const retorno = {retorno:'restify ok'};
    response.send(200, retorno);
    next();
});

server.listen(port, () => {
    console.log( 'restify executando na porta:${port}');
});

module.exports = server;