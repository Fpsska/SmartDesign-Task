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

router.post("/", async (req, res) => {
    try {
        console.log("body:", req.body)
        const { name, price, preview, manufacturer, brand } = req.body
        const newCard = await Card.create({ name, price, preview, manufacturer, brand })
        res.status(201).json(newCard)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router