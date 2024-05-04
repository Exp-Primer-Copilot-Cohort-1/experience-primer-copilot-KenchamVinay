//create a web server
var express = require('express');
var app = express();
//create a path to the comments file
var comments = require('./comments');

//set up the server to listen for requests
app.listen(3000, function() {
    console.log('Server listening on port 3000');
});

//set up a route for comments
app.get('/comments', function(req, res) {
    res.send(comments);
});

//set up a route for comments
app.get('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = comments[id];
    if (comment) {
        res.send(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

//set up a route for comments
app.get('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = comments[id];
    if (comment) {
        res.send(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

//set up a route for comments
app.get('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = comments[id];
    if (comment) {
        res.send(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

//set up a route for comments
app.get('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = comments[id];
    if (comment) {
        res.send(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

//set up a route for comments
app.get('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = comments[id];
    if (comment) {
        res.send(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

//set up a route for comments
app.get('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = comments[id];
    if (comment) {
        res.send(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});