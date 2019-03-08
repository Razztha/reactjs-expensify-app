// Setting up deployment server using express
const path = require('path');
var express = require('express');
var app = express();
// var publicPath = path.join(__dirname, '..', 'Public');
var publicPath = path.join('..', 'Public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log("Server is up!");
});