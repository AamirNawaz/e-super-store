// Mongodb connection
var mongoose = require('mongoose');

const dbConnection = () => {
    return mongoose.connect(`${process.env.DB_CONNECTION_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log('Mongoos Connected');
    }).catch((e) => {
        console.log(e);
    })
}

module.exports = {
    dbConnection,
}