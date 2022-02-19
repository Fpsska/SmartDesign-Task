const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const app = express()

const PORT = process.env.PORT || 8080;
const DB_URL = config.get("DB_URL")


// Imported Routes
const cardsRoute = require("./routes/cardsRouter")

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT, PATCH, UPDATE");
    next()
});

// Middleware
app.use(express.json({ extended: true }))
app.use("/cards", cardsRoute)


// Routes
app.get("/", (req, res) => {
    res.send("We are on START route")
})

// MongoDB
const startServer = () => {
    try {
        mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, console.log("Connected to MongoDB"))
        app.listen(PORT, () => console.log((`Server has been started on port ${PORT}`)))
    } catch (error) {
        res.json({ message: error.message })
    }
}

startServer()
