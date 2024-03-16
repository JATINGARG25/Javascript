let gameNumber = 45;

let userNumber = prompt("Guess the gameNumber:");

while(userNumber != gameNumber){
    userNumber = prompt("You entered wrong number. Guess it again: ")
}

console.log("Congratulations! You guessed the right number.")