var express = require('express');
var router = express.Router();
var Flashcard = require('../models/Flashcard');

router.get('/', function (req, res, next) {
    Flashcard.find({}).then(function (data) {
        console.log("SUCCESS");
        console.log(data);
        res.json(data);
    }).catch(function (err) {
        console.log("ERR");
        console.log(err);
        res.send(500);
    });
});

router.get('/random', function (req, res, next) {
    Flashcard.aggregate([ { $sample: { size: 1 } } ])
    .then(function (data) {
        console.log("SUCCESS");
        console.log(data);
        res.json(data);
    })
    .catch(function (err) {
        console.log("ERR");
        console.log(err);
        res.send(500);
    });
});

module.exports = router;