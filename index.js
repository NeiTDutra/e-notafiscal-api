const app = require('./src/app');

const port = process.env.PORT_SERVER_RPS || 7575;


app.listen(port, () => {
    console.log(`Server RPS is running on ${ port }`);
});
