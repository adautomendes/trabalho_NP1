const { Sequelize } = require('sequelize');
const Foto = require('../models/modelFotos');
const Op = Sequelize.op;    

async function insertFoto(req, res){
    let modelo = req.body.modelo;
    let ano = req.body.ano;

    let foto = await Foto.create(
        {
            modelo: modelo,
            ano: ano
        }
    );

    let createdFoto = await Foto.findByPk(foto.id);
    res.json(createdFoto);
}

async function updateFoto(req, res){
    let id = req.params.id;
    let modelo = req.body.modelo;
    let ano = req.body.ano;

    await Foto.update(
        {
            modelo: modelo,
            ano: ano
        },
        {
            where:
            {
                id: id
            }
        }
    );

    let updatedFoto = await Foto.findByPk(id);
    res.json(updatedFoto);
}

async function searchFotos(req, res) {
    let id = req.query.id;
    let ano = req.query.ano;
    
    if (id) { // Se o id estiver presente buscará por id (PK)
        let fotos = await Foto.findByPk(id);
        res.json(fotos);
    } else if (ano) { // Se o nome estiver presente buscará por nome
        let fotos = await Foto.findAll(
            { // O where segue a mesma lógica do update, sempre será usado como filtro
                where: {
                    ano
                }
            }
        );
        res.json(fotos);
    } else { // Caso nenhum parâmetro seja satisfeito, busca todos
        let fotos = await Foto.findAll();
        res.json(fotos);
    }
};

async function searchFotos2(req, res) {
    let anoInicio = req.query.anoInicio;
    let anoFim = req.query.anoFim;
    
    let fotos = await Foto.findAll(
        {
            where: {
                ano: {
                    $gte:2010
                }
              }
        }
    );
    res.json(fotos);
};

async function deleteFoto(req, res) {
    let id = req.params.id;

    let nDeleted = await Foto.destroy(
        {
            where: {
                id
            }
        }
    );

    res.json(
        {
            linhas_excluidas: nDeleted
        }
    );
};


module.exports = {insertFoto, updateFoto, searchFotos, searchFotos2, deleteFoto}