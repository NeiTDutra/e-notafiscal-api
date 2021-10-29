/*
/ file: ./src/config/dbConnection.js
/ contents: mongodb database server configuration file
/ author: Nei Thomassin Dutra <nei.thomass@gmail.com>
/ date: 2021-10-29
*/

const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_RPS || 'mongodb://localhost:27017/nservicos';

mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
.then (() => {
    const db = mongoose.connection;
    console.log('MongoDB - port: 27017 \nModels: ',db.models);
})
.catch ((error) => {
    console.log('MongoDB connection error: '+error);
    process.exit();
});
