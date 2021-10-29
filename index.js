/*
/ file: ./index.js
/ contents: this file launches the application server, 
/ on the port determined by the environment variable
/ author: Nei Thomassin Dutra <nei.thomass@gmail.com>
/ date: 2021-10-29
*/

const app = require('./src/app');

const port = process.env.PORT || 7575;


app.listen(port, () => {
    console.log(`Server RPS is running on ${ port }`);
});
