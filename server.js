const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const app = express()

const PORT = config.get("PORT") || 8080;
const DB_URL = config.get("DB_URL")


// Routes
app.get("/", (req, res) => {
    res.send("We are on START route")
})

// MongoDB
const startServer = () => {
    try {
        mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, console.log("Connected to MongoDB"))
        app.listen(PORT, () => console.log((`App has been started on port ${PORT}`)))
    } catch (error) {
        res.json({ message: error.message })
    }
}

startServer()
