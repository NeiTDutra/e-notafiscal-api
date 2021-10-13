const [
    RPS,
    PrestadorRps,
    TomadorRps,
    ServicoRps,
    FiscoRps,
    Endereco
    ] = require('../models/rpsModel');
const home = '<h2>Welcome at the home page from RPS API</h2>\
            <p>consultar tudo: <a href="http://localhost:7575/enotafiscal/api/v1/rps">\
            http://localhost:7575/enotafiscal/api/v1/rps\
            </a></p>\
            <p>consultar uma: <a href="http://localhost:7575/enotafiscal/api/v1/rps/6165545caadd4e2bbadbe6f2">\
            http://localhost:7575/enotafiscal/api/v1/rps/id</a>\
            </p>';
const urlResponse = 'http://localhost:7070/rpss/rps/created';


exports.index = (req, res, next) => {

    res.status(200).send(home);
}; 

exports.rpsListAll = (req, res, next) => {

    RPS.find({}).sort({numero: -1}).exec( (err, list_rps) => {

        if(err) { return next(err); }

        console.log('LIST ALL:', list_rps);
        res.status(200).send({ 
                message: undefined===list_rps ? 'list undefined' : list_rps 
            });
    });
};

exports.rpsListOne = (req, res, next) => {

    RPS.findById(req.params.id).exec( (err, detail_rps) => {

        if(err) { return next(err); }

        res.status(200).json({ 
                message: undefined===detail_rps ? 'detail undefined' : detail_rps
            });
    });
};

exports.rpsCreate = (req, res, next) => {

    console.log('REQ: \n', req.body);
    let endereco = new Endereco(
         
        { 
            cep: req.body['end-cep-prestador'],
            logradouro: req.body['end-logradouro-prestador'],
            numero: req.body['end-numero-prestador'],
            complemento: req.body['end-complemento-prestador'],
            bairro: req.body['end-bairro-prestador'],
            cidade: req.body['end-cidade-prestador'],
            uf: req.body['end-uf-prestador'],
        }
    );
    let prestador = new PrestadorRps(

        {
            cpf: req.body['cpf-prestador'],
            cnpj: req.body['cnpj-prestador'],
            inscr_municipal: req.body['inscr-municipal-prestador'],
            nome_razao: req.body['nome-razao-prestador'],
            endereco: endereco,
            fone: req.body['fone-prestador'],
            email: req.body['email-prestador']
        }
    );
    let tomador = new TomadorRps(

        {
            cpf: req.body['cpf-tomador'],
            cnpj: req.body['cnpj-tomador'],
            inscr_municipal: req.body['inscr-municipal-tomador'],
            nome_razao: req.body['nome-razao-tomador'],
            endereco:endereco,
            fone: req.body['fone-tomador'],
            email: req.body['email-tomador']
        }
    );
    let discr = new ServicoRps(

        {
            quantidade: req.body['discr-quantidade'],
            descricao: req.body['discr-descricao'],
            valorUnitario: req.body['discr-valor-unitario'],
            valorTotal: req.body['discr-valor-total']
        }
    );
    let fisco = new FiscoRps(

        {
            pis: req.body['fisco-pis'],
            cofins: req.body['fisco-cofins'],
            csll: req.body['fisco-csll'],
            inss: req.body['fisco-inss'],
            irrf: req.body['fisco-irrf'],
            outras: req.body['fisco-outras'],
            iss: req.body.aliquotaiss['iss'],
            desconto: req.body['fisco-desconto']
        }
    );
    let rps = new RPS(
        {
            dataHora: req.body.datahora,
            numero: req.body.numero,
            serie: req.body.serie,
            prestador: prestador,
            tomador: tomador,
            cod_atividade: req.body['cod-atividade'],
            discriminacao: discr,
            fisco: fisco,
            valor: req.body['valor-rps'],
            valorNota: req.body['valor-nota-rps'],
            issRetido: req.body['iss-retido'],
            outras: req.body.outras
        }
    );
    console.log('RPS object:\n',rps);
    rps.save( (err) => {

        if(err) { return next(err); }

        // const mess = json();
        console.log('MESS: \n', rps);
        res.json(urlResponse, { message: rps });
    });
};

exports.rpsUpdate = (req, res, next) => {

    let rps = 
        {
            dataHora: req.body.datahora,
            numero: req.body.numero,
            serie: req.body.serie,
            prestador: 
            {
                cpf: req.body.cpf-prestador,
                cnpj: req.body.cnpj-prestador,
                inscr_municipal: req.body.inscr-municipal-prestador,
                nome_razao: req.body.nome-razao-prestador,
                endereco: 
                { 
                    cep: req.body.end-cep-prestador,
                    logradouro: req.body.end-logradouro-prestador,
                    numero: req.body.end-numero-prestador,
                    complemento: req.body.end-complemento-prestador,
                    bairro: req.body.end-bairro-prestador,
                    cidade: req.body.end-cidade-prestador,
                    uf: req.body.end-uf-prestador,
                },
                fone: req.body.fone-prestador,
                email: req.body.email-prestador
            },
            tomador: 
            {
                cpf: req.body.cpf-tomador,
                cnpj: req.body.cnpj-tomador,
                inscr_municipal: req.body.inscr-municipal-tomador,
                nome_razao: req.body.nome-razao-tomador,
                endereco: 
                { 
                    cep: req.body.end-cep-tomador,
                    logradouro: req.body.end-logradouro-tomador,
                    numero: req.body.end-numero-tomador,
                    complemento: req.body.end-complemento-tomador,
                    bairro: req.body.end-bairro-tomador,
                    cidade: req.body.end-cidade-tomador,
                    uf: req.body.end-uf-tomador
                },
                fone: req.body.fone-tomador,
                email: req.body.email-tomador
            },
            cod_atividade: req.body.cod-atividade,
            discriminacao: 
            {
                quantidade: req.body.discr-quantidade,
                descricao: req.body.discr-descricao,
                valorUnitario: req.body.discr-valor-uni,
                valorTotal: req.body.discr-valor-total
            },
            fisco: 
            {
                pis: req.body.fisco-pis,
                cofins: req.body.fisco-cofins,
                csll: req.body.fisco-csll,
                inss: req.body.fisco-inss,
                irrf: req.body.fisco-irrf,
                outras: req.body.fisco-outras,
                iss: req.body.fisco-iss
            },
            valor: req.body.valor-rps,
            issRetido: req.body.iss-retido
        };

        RPS.findByIdAndUpdate(req.params.id, rps, {}, function (err, rps) {
    
            if(err) { return next(err); }
    
            res.redirect(rps.url);
        });
    };

exports.rpsDelete = (req, res, next) => {

    RPS.findByIdAndRemove(req.body.id, function (err) {

        if (err) { return next(err); }
        
        res.redirect('/rps');
    });
};
