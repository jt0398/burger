var express = require("express");

var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
    const burgers = burger.findAll();
    res.json(burgers);
});

router.post("/api/burgers", function(req, res) {
    const singleBurger = burger.create(req.body.burgerName);
    res.json(singleBurger);
});

router.put("/api/burgers/:id", function(req, res) {
    const result = burger.update(req.params.id);
});