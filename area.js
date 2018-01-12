const express = require('express'),
    bodyParser = require('body-parser');
const area = express.Router()

var getArea = require('./areaImpl.js');

area.get('/getArea', function (req, res) {
    let c = getArea([parseInt(req.query.side1),parseInt(req.query.side2)]);
    let ret = {area:c};

    if (c === -1)
        res.status(400).json(ret);
    else
        res.status(200).json(ret);
})

module.exports = area;