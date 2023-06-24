var randomNumber1 = Math.round((Math.random()*5)+1);

var randomNumber2 = Math.round((Math.random()*5)+1);

var value1 = "./images/dice"+randomNumber1+".png";

var value2 = "./images/dice"+randomNumber2+".png";


document.querySelector(".img1").setAttribute("src", value1);

document.querySelector(".img2").setAttribute("src", value2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else if(randomNumber1 ===  randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!"
}
