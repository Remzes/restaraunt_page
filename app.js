const express = require('express');
const path = require('path');

const app = express();

app.get((req, res) => {
   console.log("Rendering is completed...");
});

app.use(express.static(__dirname + "/public"));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});