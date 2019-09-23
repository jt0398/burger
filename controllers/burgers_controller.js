var express = require("express"); //Express module

var burger = require("../models/burger"); //Burger model

var router = express.Router();

//Handles request from the root and sends all burger back to the client
router.get("/", async function(req, res) {
    const burgers = await burger.findAll().catch(error => { console.log(error); });
    res.render("index", { wholeBurgers: burgers[0], devouredBurgers: burgers[1] });
});

//Handles POST request from this path and create new burger
router.post("/api/burgers", async function(req, res) {
    const singleBurger = await burger.create(req.body.burgerName).catch(error => {
        res.sendStatus(400); //Sends a bad request error to the client if there's a SQL error
    });
    res.json(singleBurger);
});

//Handles PUT request from this path and update the status of the burger
router.put("/api/burgers/:id", async function(req, res) {
    const result = await burger.update(req.params.id).catch(error => { console.log(error); });
    res.sendStatus(200);
});

module.exports = router;