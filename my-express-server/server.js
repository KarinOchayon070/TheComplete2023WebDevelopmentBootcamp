const expres = require("express");
const app = expres();

app.get("/", function(request, response){
    response.send("hi");
});

app.get("/about", function(request, response){
    response.send("hi about");
});

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});