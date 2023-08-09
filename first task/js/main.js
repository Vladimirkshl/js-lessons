var btn = document.getElementById("play");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var result = document.getElementById("result");


function getPlayerResult() {
    var randomValue = Math.floor((Math.random() * 3) + 1);
    return getNameById(randomValue);
}


function runGame() { 
    var firstResult = getPlayerResult();
    var secondResult = getPlayerResult();
    var winer = determineWinner(firstResult, secondResult);

    player1.innerHTML = firstResult;
    player2.innerHTML = secondResult;

    printResult(winer);
}


function getNameById(value) {
    switch (value) {
        case 1:
            return "камень";
            break;
        case 2:
            return "ножницы";
            break;
        default:
            return "бумага";    
    }
}


function determineWinner(firstResult, secondResult) {
    if (firstResult == "камень" && secondResult == "ножницы" || firstResult == "ножницы" && secondResult == "бумага" || firstResult == "бумага" && secondResult == "камень") {
        console.log("First player has won!");
        return 1;
    } else if (firstResult == "камень" && secondResult == "бумага" || firstResult == "ножницы" && secondResult == "камень" || firstResult == "бумага" && secondResult == "ножницы") {
        console.log("Second player has won!");
        return 2;
    } else {
        console.log("The same values");
        return 3;
    }
}


function printResult(winer) {
    switch (winer) {
        case 1: 
            result.innerHTML = "Выиграл первый игрок";
            break;
        case 2:
            result.innerHTML = "Выиграл второй игрок";
            break;
        case 3:
            result.innerHTML = "Ничья";
            break;
    } 
}


btn.addEventListener("click", runGame);