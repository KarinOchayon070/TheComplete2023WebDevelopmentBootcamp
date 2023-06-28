const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=791fe8c029547f25974da93ebad49b5a";
    https.get(url, function(response){
        console.log(response.statusCode); 
        
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const urlIcon = 'https://openweathermap.org/img/wn/'+icon+'@2x.png';
            res.write("<h1>The temp is: " + temp + "</h1>");
            res.write("<p>Weather description: " + weatherDescription+"</p>");
            res.write("<img src=" + urlIcon + ">");
            res.send();
            console.log(weatherDescription);
        })
    });
});




app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});