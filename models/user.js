const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const User = new Schema({
    username: String,
    password: String
});

User.statics.create = function(username, password) {
    const encrypted = crypto.createHash('sha512').update(password).digest("base64");
    const user = new this({
        username,
        password: encrypted
    });

    return user.save();
}

User.statics.findOneByUsername = function(username) {
    return this.findOne({
        username
    }).exec();
}

User.methods.verify = function(password) {
    const encrypted = crypto.createHash('sha512').update(password).digest("base64");
    return this.password === encrypted;
}

module.exports = mongoose.model('User', User)