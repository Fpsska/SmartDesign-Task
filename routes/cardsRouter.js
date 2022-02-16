const express = require("express")
const router = express.Router()
const Card = require("../models/cardModel")

// /cards
router.get("/", async (req, res) => {
    try {
        const allCards = await Card.find()
        res.json(allCards)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router