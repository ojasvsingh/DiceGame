$(".btn").on("click",function(){
    rollDice();
});


function rollDice(){
    randomNum1 = Math.floor(Math.random() *6) +1;
    diceNum = "./images/dice" + randomNum1 + ".png";
    document.querySelector(".img1").setAttribute("src", diceNum);
    randomNum2 = Math.floor(Math.random() *6) +1;
    diceNum2 = "./images/dice" + randomNum2 + ".png";
    document.querySelector(".img2").setAttribute("src" , diceNum2);
    checkWinner();
}

function checkWinner(){
    if(randomNum1>randomNum2){
        document.querySelector("h1").textContent = "Player 1 Wins";
    }
    else if (randomNum1 < randomNum2){
        document.querySelector("h1").textContent = "Player 2 Wins";
    }
    else{
        document.querySelector("h1").textContent = "Draw";
    }
}
