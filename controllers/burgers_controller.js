var express = require("express");

var burger = require("../models/burger");

var router = express.Router();

router.get("/", async function(req, res) {
    const burgers = await burger.findAll().catch(error => { console.log(error); });
    res.render("index", { wholeBurgers: burgers[0], devouredBurgers: burgers[1] });
});

router.post("/api/burgers", async function(req, res) {
    const singleBurger = await burger.create(req.body.burgerName).catch(error => {
        res.sendStatus(400);
    });
    res.json(singleBurger);
});

router.put("/api/burgers/:id", async function(req, res) {
    const result = await burger.update(req.params.id).catch(error => { console.log(error); });
    res.sendStatus(200);
});

module.exports = router;