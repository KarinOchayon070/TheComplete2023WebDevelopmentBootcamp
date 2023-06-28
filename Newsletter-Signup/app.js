const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,  res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    var firstNmae = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstNmae+ lastName+ email);
    const apiKey = "6e32b2ee12bb23430bbd0180cf4efd87-us21";
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});