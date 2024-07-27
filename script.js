console.log("Hello World");

const possibleChoises = ['rock', 'paper', 'scissors'];
//so we and the computer can use it 

const getComputerChoice = (arr = 3) =>{
    //return Math.floor(Math.random() * arr);
    const theRandomComputerChoice = Math.floor(Math.random() * arr);

    if(theRandomComputerChoice == 0){
        return possibleChoises[0];
    }else if(theRandomComputerChoice == 1){
        return possibleChoises[1];
    }else if(theRandomComputerChoice == 2){
        return possibleChoises[2];
    } else {
        //no nuber can possibly be lonhge but we just use it in case
        //we can also remove it and add the last if else as the normal 
        //last else
        console.log("Error: the array length is less than 3");
        return null;
    }
}   

const getUserChoice = (input = 0) => {

    //here we need no random number generator as the user will make
    //the choise
    console.log("0. for rock");
    console.log("1. for paper");
    console.log("2. for scissors");

    const userMove = parseInt(prompt("please enter a value"));
    
    if(userMove == 0){
        return possibleChoises[0];
    }else if(userMove == 1){
        return possibleChoises[1];3
    }else if(userMove == 2){
        return possibleChoises[2];
    } else {
        //here the else does make more sense because the user can input what ever number he whants
        console.log("Error: the array length is less than 3");
        return null;
    }
}

//to set the score
let userScore = 0;
let computerScore = 0;

