const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/redSocial-Angular7')
.then(ok => console.log('** db conectada correctamente **'))
.catch(err => console.log(err));


