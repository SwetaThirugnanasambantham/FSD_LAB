const express = require("express")
const app = express()

app.use(express.json())

// Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

// In-memory inventory data
let inventory = [
    { id: 1, name: "Laptop", quantity: 10, price: 50000 },
    { id: 2, name: "Mouse", quantity: 50, price: 500 }
]

// Routes
app.get("/", (req, res) => {
    res.send("API is working")
})

app.get("/api/inventory", (req, res) => {
    res.json(inventory)
})

app.get("/api/inventory/:id", (req, res) => {
    const item = inventory.find(i => i.id == req.params.id)
    if (!item) return res.status(404).json({ error: "Item not found" })
    res.json(item)
})

app.post("/api/inventory", (req, res) => {
    const { name, quantity, price } = req.body

    if (!name || quantity == null || price == null)
        return res.status(400).json({ error: "All fields required" })

    const newItem = {
        id: inventory.length + 1,
        name,
        quantity,
        price
    }

    inventory.push(newItem)
    res.status(201).json(newItem)
})

app.put("/api/inventory/:id", (req, res) => {
    const item = inventory.find(i => i.id == req.params.id)
    if (!item) return res.status(404).json({ error: "Item not found" })

    const { name, quantity, price } = req.body

    if (name) item.name = name
    if (quantity != null) item.quantity = quantity
    if (price != null) item.price = price

    res.json(item)
})

app.delete("/api/inventory/:id", (req, res) => {
    const index = inventory.findIndex(i => i.id == req.params.id)
    if (index === -1) return res.status(404).json({ error: "Item not found" })

    const deleted = inventory.splice(index, 1)
    res.json(deleted[0])
})

// 404 handler (must be LAST)
app.use((req, res) => {
    res.status(404).send("Route not found")
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})