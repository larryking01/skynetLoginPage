const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    username:{
        type:String,
        required:true,
        index:true, 
        unique:true 
    },
    email: {
        type:String,
        required:true,
        index:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    telephone: {
        type:String,
        required:true
    }
});


//exporting the schema.
module.exports = User = mongoose.model('Users', userSchema);

