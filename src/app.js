const express = require('express');
const path = require('path');
const app = express();

// requiring db connection to main express app
require('./db/conn');

const port = process.env.PORT || 3000
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.send("Hello it's me Suren Ale");
})

app.listen(port, () => {
    console.log(`listening to port at ${port}`);
})