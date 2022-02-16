const mongoose = require("mongoose")

const CardSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Card", CardSchema)