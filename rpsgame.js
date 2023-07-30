const shurikenBtn = document.querySelector("#shuriken");
const paperbombBtn = document.querySelector("#paperbomb");
const kunaiBtn = document.querySelector("#kunai");

shurikenBtn.addEventListener("click", () => playGame("shuriken"));
paperbombBtn.addEventListener("click", () => playGame("paperbomb"));
kunaiBtn.addEventListener("click", () => playGame("kunai"));
// () => arrow function used to callback () a function =>

//event listener adds event such as "click" to what you are calling
// for example shurikenBtn is the event that gets clicked to playGame

function playGame(userChoice) {
  // function runs the action which is playGame and the variable is (users choice)
  const choices = ["shuriken", "paperbomb", "kunai"];
  // const creates a CONSTANT variable which is choices in this situation,
  //  the choices = what is in the brackets ["shuriken", "paperbomb", "kunai"]
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  //   const computerChoice is a constant(const) variable where the computer is making a random choice
  console.log(userChoice);

  let result;
  //   let creates a CHANGING variable and result is the property containing the value returned by an event

  if (userChoice === computerChoice) {
    // computerChoice function generates a random number using Math.random()
    // userChoice is an instance where the code chooses through the users inputs
    result = "It's a tie!";
  } else if (
    (userChoice === "shuriken" && computerChoice === "kunai") ||
    (userChoice === "paperbomb" && computerChoice === "shuriken") ||
    (userChoice === "kunai" && computerChoice === "paperbomb")
    // || is an or statement
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  document.getElementById(
    "result"
  ).innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}
