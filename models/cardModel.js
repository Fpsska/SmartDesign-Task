const mongoose = require("mongoose")

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Card", CardSchema)