const express = require('express');
const fs = require('fs');
const path = require('path');

const addData = require('./addData');
const retrieveData = require('./retrieveData');
const updateData = require('./updateData');
const removeData = require('./removeData');
const queryDB = require('./queryDB');
const dbFileCheck = require('./dbFileCheck');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Ensure db.json exists
dbFileCheck();

// Routes

// Add a new note
app.post('/addData', (req, res) => {
    const result = addData(req.body);
    if (result.success) {
        res.status(201).json({ message: 'Note added successfully' });
    } else {
        res.status(400).json({ message: result.error });
    }
});

// Retrieve all notes
app.get('/retrieveData', (req, res) => {
    const notes = retrieveData();
    res.status(200).json(notes);
});

// Update a note by title
app.put('/updateData', (req, res) => {
    const result = updateData(req.body);
    if (result.success) {
        res.status(200).json({ message: 'Note updated successfully' });
    } else {
        res.status(400).json({ message: result.error });
    }
});

// Remove a note by title
app.delete('/removeData', (req, res) => {
    const result = removeData(req.body);
    if (result.success) {
        res.status(200).json({ message: 'Note removed successfully' });
    } else {
        res.status(400).json({ message: result.error });
    }
});

// Query notes by title
app.get('/queryDB', (req, res) => {
    const { title } = req.query;
    const notes = queryDB(title);
    res.status(200).json(notes);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
