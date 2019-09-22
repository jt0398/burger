var express = require("express"); //Express module for server
var exphbs = require("express-handlebars"); //Express handlebars

var app = express(); //Server or app object

var PORT = process.env.PORT | 8080; //Port the server listens on

//Sets main handlebar as the layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//Sets default extension for handlebar file
app.set("view engine", "handlebars");

//Parses incoming url requests 
app.use(express.urlencoded({ extended: true }));
//Parses incoming JSON payloads
app.use(express.json());

//Sets up Express to use default folder for static files is "public"
app.use(express.static("public"));

//Starts up the application on a port
app.listen(PORT, function() {
    console.log("Server is listening on http://localhost:" + PORT);
});