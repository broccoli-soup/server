const express = require("express");
const cors = require("cors"); // fixes permissions
const app = express();
const PORT = 3000;
app.use(cors());

// Explanation:
// The express library is part of Node.js which makes servers easy
// require() is JS' equivalent of import in Python
// app is eq. to import AS
// PORT just says where in the local server host it is... it'd be changed to the RENDER port


let currentTotal = 0;

app.use(express.json()) // we'll be using JSON files

app.post("/add", (req, res) => {
    const number = req.body.number;
    currentTotal += number;
    res.json({total:currentTotal})
})

app.get("/total", (req, res) => {
    res.json({total:currentTotal})
})

// req and res -- request and response

// npm is Node Package manager
// npm init -y initialises the server

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));