const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kashif', {useNewUrlParser: true, useUnifiedTopology: true});


const dbobject = mongoose.connection

dbobject.on('connected' , ()=>{console.log ('mongodb connected')})
dbobject.on('error' , ()=>{console.log ('mongodb not connected')})


module.exports = mongoose