const mongoose = require('mongoose')

const Schema = mongoose.Schema //database field

const UserSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', UserSchema)