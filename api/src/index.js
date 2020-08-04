require('dotenv').config();
const app = require('./config/server');

app.listen(app.get('port'), () => {
    console.log(`-- app corriendo en el puerto:' ${app.get('port')} --`);
});