var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        require: true, 
    },
    nickname : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);