const RPSModel = require('../models/rpsModel');


exports.index = (req, res, next) => {

    res.status(200).send('<h2>Welcome at the home page from RPS API</h2><p>consultar tudo: <a href="http://localhost:7575/enotafiscal/api/v1/rps">http://localhost:7575/enotafiscal/api/v1/rps</a></p><p>consultar uma: <a href="http://localhost:7575/enotafiscal/api/v1/rps/id">http://localhost:7575/enotafiscal/api/v1/rps/id</a></p>');
}; 

exports.rpsListAll = (req, res, next) => {

    RPSModel.find({}).sort({numero: -1}).exec( (err, list_rps) => {

        if(err) { return next(err); }

        res.status(200).send({ 
                message: undefined===list_rps ? 'list undefined' : 'list defined' 
            });
    });
};

exports.rpsListOne = (req, res, next) => {

    RPSModel.findById(req.params.id).exec( (err, detail_rps) => {

        if(err) { return next(err); }

        res.status(200).send({ 
                message: undefined===detail_rps ? 'detail undefined' : 'detail defined'
            });
    });
};

exports.rpsCreate = (err, req, res, next) => {

    let createdT = req.body.titulo;
    let createdM = req.body.menu;
    const created = { createdT, createdM };
    console.log(created);
    if(err) { return next(err); }

    res.status(201).send({ message: 'Created...!' });
};

exports.rpsUpdate = (req, res, next) => {

    let id = req.body.id;

    res.status(202).send({ message: 'Atualizado: ', id: id });
};

exports.rpsDelete = (req, res, next) => {

    let id = req.body.id;

    res.status(202).send({ message: 'Apagado: ', id: id });
};
