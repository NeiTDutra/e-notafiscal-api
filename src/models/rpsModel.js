const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RPSPrestadorSchema = new Schema (
    {
        cpf: { type: String },
        cnpj: { type: String },
        inscr_municipal: { type: String },
        nome_razao: { type: String },
        endereco: { 
            cep: { type: String },
            logradouro: { type: String },
            numero: { type: String },
            complemento: { type: String },
            bairro: { type: String },
            cidade: { type: String },
            uf: { type: String }
        },
        fone: { type: String },
        email: { type: String }
    }
);

const RPSTomadorSchema = new Schema (
    {
        cpf: { type: String },
        cnpj: { type: String },
        inscr_municipal: { type: String },
        nome_razao: { type: String },
        endereco: { 
            cep: { type: String },
            logradouro: { type: String },
            numero: { type: String },
            complemento: { type: String },
            bairro: { type: String },
            cidade: { type: String },
            uf: { type: String }
        },
        fone: { type: String },
        email: { type: String }
    }
);

const RPSServicoSchema = new Schema (
    {
        quantidade: { type: Number },
        descricao: { type: String },
        valorUnitario: { type: String },
        valorTotal: { type: String }
    }
);

const RPSFiscoSchema = new Schema (
    {
        pis: { type: String },
        cofins: { type: String },
        csll: { type: String },
        inss: { type: String },
        irrf: { type: String },
        outras: { type: String },
        iss: { type: String }
    }
);

const RPSSchema = new Schema (
    {
        dataHora: { type: Date },
        numero: { type: Number },
        serie: { type: Number },
        prestador: {RPSPrestadorSchema},
        tomador: {RPSTomadorSchema},
        cod_atividade: { type: String },
        discriminacao: {RPSServicoSchema},
        fisco: {RPSFiscoSchema},
        valor: { type: String },
        issRetido: { type: Boolean }

    }
);

RPSSchema.virtual('url').get(function () {
    return '/rps/'+this._id;
});

RPSPrestadorSchema.virtual('url').get(() => {
    return '/prestador/'+this._id;
});

RPSTomadorSchema.virtual('url').get(() => {
    return '/tomador/'+this._id;
});

RPSServicoSchema.virtual('url').get(() => {
    return '/servico/'+this._id;
});

RPSFiscoSchema.virtual('url').get(() => {
    return '/fisco/'+this._id;
});

const Rps = mongoose.model('RPS', RPSSchema);
const PrestadorRps = mongoose.model('Prestador', RPSPrestadorSchema);
const TomadorRps = mongoose.model('Tomador', RPSTomadorSchema);
const ServicoRps = mongoose.model('Servico', RPSServicoSchema);
const FiscoRps = mongoose.model('Fisco', RPSFiscoSchema);

module.exports = [
    Rps,
    PrestadorRps,
    TomadorRps,
    ServicoRps,
    FiscoRps
];
