const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = weight/(height*height);
    res.send("Bmi is: " + bmi);
});

// app.get("/", function(req, res){
//     res.sendFile(__dirname +"/index.html");
// });

// app.post("/", function(req, res){
//     var firstNumber = Number(req.body.firstNumber);
//     var secondNumber = Number(req.body.secondNumber);
//     var result = firstNumber + secondNumber;
//     res.send("The result is: "+ result);
// });

app.listen(3000, function(){
    console.log("The app in running on port 3000!");
});