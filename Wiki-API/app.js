const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser : true});

const articlesSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articlesSchema);

 
const article = new Article({
  title: "Welcome",
  content: "bla vla"
});

// Insert the article into the database
article.save().then(function() {
      console.log("Article inserted successfully.");
}).catch(function(err){
    console.log(err);
});

app.get("/articles", function(req, res){
    Article.find().then(function(results){
        res.send(results);
    })
    .catch(function(err){
        console.log(err);
    });
});

app.listen(3000, function(){
    console.log("App is running on port 3000")
});