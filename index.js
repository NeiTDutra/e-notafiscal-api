const app = require('./src/app');

const port = process.env.PORT_SERVER || 7575;


app.listen(port, () => {
    console.log(`Server is running on ${ port }`);
});
