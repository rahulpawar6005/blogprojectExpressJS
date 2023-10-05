const mongoose = require('mongoose')

//define schema/field

const BlogSchema = new mongoose.Schema({
    header: {
        type: String,
        require: true
    },
    title: {
        type: String,
        required: true
    },
    description_1: {
        type: String,
        required: true
    },
    description_2: {
        type: String,
        required: true
    },
    // image_about: {
    //     public_id: {
    //         type: String
    //     },
    //     url: {
    //         type: String
    //     }
    // }
}, { timestamps: true })
//create collections
//blog is a name of collection and BlogSchema take a fields
const AboutModel = mongoose.model('about_us', BlogSchema)

module.exports = AboutModel