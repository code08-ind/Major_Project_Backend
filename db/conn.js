const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connection Successfull with the Database');
}).catch((err) => {
    console.log('Connection Unsuccessfull with the Database with error: ' + err);
});