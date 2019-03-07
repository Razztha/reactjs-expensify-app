// Setting up deployment server

const path = require('path');
var express = require('express');
var app = express();
var publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, "0.0.0.0", () => {
    console.log("Server is up!");
});