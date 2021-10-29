/*
/ file: ./src/controllers/rpsController.js
/ contents: model class file representing information object created by the mongoose library
/ author: Nei Thomassin Dutra <nei.thomass@gmail.com>
/ date: 2021-10-29
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const RPSSchema = new Schema (
    {
        dataHora: { type: Date },
        numero: { type: Number },
        serie: { type: Number },
        prestador: [
        {
            cpf: { type: String },
            cnpj: { type: String },
            inscr_municipal: { type: String },
            nome_razao: { type: String },
            endereco: [ 
            {
                cep: { type: String },
                logradouro: { type: String },
                numero: { type: String },
                complemento: { type: String },
                bairro: { type: String },
                cidade: { type: String },
                uf: { type: String }
            }],
            fone: { type: String },
            email: { type: String }
        }],
        tomador: [
        {
            cpf: { type: String },
            cnpj: { type: String },
            inscr_municipal: { type: String },
            nome_razao: { type: String },
            endereco: [
            {
                cep: { type: String },
                logradouro: { type: String },
                numero: { type: String },
                complemento: { type: String },
                bairro: { type: String },
                cidade: { type: String },
                uf: { type: String }
            }],
            fone: { type: String },
            email: { type: String }
        }],
        cod_atividade: { type: String },
        discriminacao: [
        {
            quantidade: { type: Number },
            descricao: { type: String },
            valorUnitario: { type: String },
            valorTotal: { type: String }
        }],
        fisco: [
        {
            pis: { type: String },
            cofins: { type: String },
            csll: { type: String },
            inss: { type: String },
            irrf: { type: String },
            outras: { type: String },
            iss: { type: String },
            desconto: { type: String }
        }],
        valor: { type: String },
        valorNota: { type: String },
        issRetido: { type: Boolean },
        outras: { type: String }

    }
);

RPSSchema.virtual('url').get(function () {
    return '/rps/'+this._id;
});

module.exports = mongoose.model('RPS', RPSSchema);
