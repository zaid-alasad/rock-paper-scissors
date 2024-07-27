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



//console.log(getComputerChoice());
//testing pepose plus max value will be 2 as the default
//para value is set to 3