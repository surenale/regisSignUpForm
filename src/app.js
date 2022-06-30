const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello it's me Suren Ale");
})

app.listen(port, () => {
    console.log(`listening to port at ${port}`);
})