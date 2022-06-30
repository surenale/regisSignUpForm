// connection to mongodb using mongoose 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentRegistration')
.then(() => {
    console.log("Connection is Successful");
}).catch(() => {
    console.log("No Connection");
})