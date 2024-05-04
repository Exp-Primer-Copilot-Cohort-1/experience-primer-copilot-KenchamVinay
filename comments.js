//create a web server
const express = require('express');
const app = express();

//use a middleware to serve static files
app.use(express.static('public'));

//use a middleware to parse the body of the request
app.use(express.json());

//use a middleware to parse the body of the request
app.use(express.urlencoded({ extended: true }));

//create an array of comments
let comments = [
    'This is my first comment!',
    'This is my second comment!',
    'This is my third comment!',
    'This is my fourth comment!',
    'This is my fifth comment!',
    'This is my sixth comment!',
    'This is my seventh comment!',
    'This is my eighth comment!',
    'This is my ninth comment!',
    'This is my tenth comment!',
];

//create a route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//create a route to get a specific comment
app.get('/comments/:index', (req, res) => {
    let index = req.params.index;
    res.json(comments[index]);
});

//create a route to add a comment
app.post('/comments', (req, res) => {
    let comment = req.body.comment;
    comments.push(comment);
    res.json('Comment added');
});

//create a route to update a comment
app.put('/comments/:index', (req, res) => {
    let index = req.params.index;
    let comment = req.body.comment;
    comments[index] = comment;
    res.json('Comment updated');
});

//create a route to delete a comment
app.delete('/comments/:index', (req, res) => {
    let index = req.params.index;
    comments.splice(index, 1);
    res.json('Comment deleted');
});

//create a route to delete all comments
app.delete('/comments', (req, res) => {
    comments = [];
    res.json('All comments deleted');
});

//start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});