const router = require('../config/server').server;
const service = require('../services/foto');

router.get('/eb019/foto', (request, response, next) => {
    service.searchFotos(request, response).then(data => {
        response.send(200, 'busca realizada');
    }).catch(err => {
        response.send(503, 'falha ao buscar');
    });
    next();
});

router.get('/eb019/fotos', (request, response, next) => {
    service.searchFotos2(request, response).then(data => {
        response.send(200, 'busca realizada');
    }).catch(err => {
        response.send(503, 'falha ao buscar');
    });
    next();
});

router.patch('/eb019/foto/:id', (request, response, next) => {
    service.updateFoto(request, response).then(data => {
        response.send(200, 'Foto atualizada com sucesso');
    }).catch(err =>{
        response.send(400, err);
    })
});

router.post('/eb019/foto', (request, response, next) =>{
    service.insertFoto(request, response).then(data => {
        response.send(200, 'Foto inserida com sucesso');
    }).catch(err =>{
        response.send(400, err);
    })
});

router.del('/eb019/foto/:id', (request, response, next) => {
    service.deleteFoto(request, response).then(data => {
        response.send(200, 'Foto deletada com sucesso');
    }).catch(err =>{
        response.send(400, err);
    })
});

module.exports = router;