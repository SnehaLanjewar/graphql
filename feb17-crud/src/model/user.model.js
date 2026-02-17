const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    hashed_password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    salt: { type: String},
});

UserSchema.virtual('password')
    .set(function (password) {
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password);
    });

UserSchema.methods = {
    makeSalt: function () {
        return Math.random().toString(36).substring(2, 15);
    },
    encryptPassword: function (password) {
        if (!password) return '';
        return crypto.createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');
    }
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
