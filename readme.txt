this is following along with the oden project java script first project
there will later be GUI taht will be incuded 
inital version 1.0 will be run via a console 
alot of ideas can be included in the idea for further versions

1. plan the solution
2. write the code
3. test your code to make sure it works

    we might need this function late ron in this subject as we may change some stuff
    well keep it here for refrence

function theLogic(pc, user){
    
    if(pc == user){
        computerScore++;
        humanScore++;
        return "It's a tie!";
    } else if((pc == 'rock' && user =='scissors') || (pc =='scissors' && user == 'paper') || (pc == 'paper' && user == 'rock')){
        computerScore++;
        return "Computer wins!";
    } else {
        humanScore++;
        return "User wins!";
    }
}