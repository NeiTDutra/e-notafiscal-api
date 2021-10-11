const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_URI_RPS || 'mongodb://localhost:27017/nservicos';

mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
.then (() => {
    const db = mongoose.connection;
    console.log('MongoDB connection success: '+db);
})
.catch ((error) => {
    console.log('MongoDB connection error: '+error);
    process.exit();
});
