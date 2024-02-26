const db = require('./db/connection');
const express = require('express');
const startInq = require('./lib/departments.js');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, this is the root endpoint!');
});

app.use((req, res, next) => {
    res.status(404).send("Not Found");
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database');
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
        startInq();
    });
});