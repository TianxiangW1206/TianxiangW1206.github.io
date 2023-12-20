// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();


function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
  for (let round = 1; round <= numRolls; round++) {
    setTimeout(function () {
      rollDice();
    // report how much money was won or lost and the balance
    if (dieSum <= 5){
      outcome = '<span style="background-color: #3cc6d0; color: white; padding: 2px; border-radius: 3px;">You lose, please pay me  5  dollars.</span>';
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = '<span style="background-color: #3cc6d0; color: white; padding: 2px; border-radius: 3px;">You win, I pay you  5  dollars.</span>';
      balance += 5;
    } else {
      outcome = '<span style="background-color: #3cc6d0; color: white; padding: 2px; border-radius: 3px;">Its a draw, nobody wins or loses.</span>';
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome;

   // Report the current balance:
   document.querySelector("h3").innerHTML += "<br>Current Balance: $" + balance;

   if (round === numRolls) {
    setTimeout(function () {
      displayFinalMessage();
    }, 2000);
  }

  }, 2000 * round); 
}
}

function displayFinalMessage() {
  //if win, shows congratulations, if lose, shows Oops, if draw, shows try again
  let finalMessage = "";
  if (balance > 0) {
    finalMessage = '<span style="color: green;">Congratulations!</span>';
  } else if (balance < 0) {
    finalMessage = '<span style="color: blue;">Oops..</span>';
  } else {
    finalMessage = '<span style="color: yellow;">Try again!!</span>';
  }

  document.querySelector("h3").innerHTML += "<br>" + finalMessage;
} 

function letsPlay(){
  numRolls = prompt("How many rounds do you want to roll?");
  numRolls = parseInt(numRolls);
  rollDice();
  whoWon();
}
