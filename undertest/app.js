const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Define an array of image filenames
const imageFilenames = ['Aiden.png', 'Amira.png', 'Nebula.png'];

// Set up a route to render the HTML page
app.get('/', (req, res) => {
    res.render('index', { imageFilenames });
});

// Set up routes to serve multiple images dynamically
for (let i = 0; i < imageFilenames.length; i++) {
    const routePath = `/image${i + 1}`;
    const imagePath = path.join(__dirname, 'img/heroes/', imageFilenames[i]);

    app.get(routePath, (req, res) => {
        res.sendFile(imagePath);
    });
}

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});