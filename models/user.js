//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String
});

module.exports = mongoose.model('User', UserSchema );
