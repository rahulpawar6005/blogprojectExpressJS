const mongoose = require('mongoose')


//define schema/field

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }

}, { timestamps: true })
//create collections
//blog is a name of collection and BlogSchema take a fields
const ContactModel = mongoose.model('contact', ContactSchema)

module.exports = ContactModel