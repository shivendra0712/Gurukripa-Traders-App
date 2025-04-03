const mongoose = require('mongoose')
// console.log();

function connect(){
    mongoose.connect(process.env.MONGODB)
    .then(()=>{
        console.log('Db is connected');
    })
    .catch((err)=>{
        console.log('error',err);
    })
}

module.exports = connect;