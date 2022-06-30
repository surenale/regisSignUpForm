const express = require('express');
const app = express();
const port = process.env.PORT || 3000

// requiring db connection to main express app
require('./db/conn');

app.get("/", (req, res) => {
    res.send("Hello it's me Suren Ale");
})

app.listen(port, () => {
    console.log(`listening to port at ${port}`);
})