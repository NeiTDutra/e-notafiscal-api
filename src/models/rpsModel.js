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

const RPSAtividadeSchema = new Schema (
    {
        list: { type: Array }
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
        prestador: [RPSPrestadorSchema],
        tomador: [RPSTomadorSchema],
        cod_atividade: [RPSAtividadeSchema],
        discriminacao: [RPSServicoSchema],
        fisco: [RPSFiscoSchema],
        valor: { type: String },
        issRetido: { type: Boolean }

    }
);

RPSSchema.virtual('url').get(function () {
    return '/rps/'+this._id;
});

module.exports = mongoose.model('RPS', RPSSchema);
module.exports = mongoose.model('Prestador', RPSPrestadorSchema);
module.exports = mongoose.model('Tomador', RPSTomadorSchema);
module.exports = mongoose.model('Atividade', RPSAtividadeSchema);
module.exports = mongoose.model('Servico', RPSServicoSchema);
module.exports = mongoose.model('Fisco', RPSFiscoSchema);
