//var express = require("express"); //Express module

var burger = require("../models/burger"); //Burger model

//var router = express.Router();

module.exports = function(app) {

    //Handles request from the root and sends all burger back to the client
    app.get("/", async function(req, res) {
        console.log("burger.findAll");
        /*const burgers = await burger.findAll().catch(error => { console.log(error); });
        res.render("index", { wholeBurgers: burgers[0], devouredBurgers: burgers[1] });*/
        res.send("../public/index.html");
    });

    //Handles POST request from this path and create new burger
    app.post("/api/burgers", async function(req, res) {
        const singleBurger = await burger.create(req.body.burgerName).catch(error => {
            res.sendStatus(400); //Sends a bad request error to the client if there's a SQL error
        });
        res.sendStatus(201);
    });

    //Handles PUT request from this path and update the status of the burger
    app.put("/api/burgers/:id", async function(req, res) {
        const result = await burger.update(req.params.id).catch(error => { console.log(error); });
        res.sendStatus(200);
    });
};