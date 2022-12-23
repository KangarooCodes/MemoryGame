const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("button");
    
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let scoreCount = 0;
    console.log(scoreCount)
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  const bColor = event.target.className
    

  if(bColor == "red") {
    event.target.className = "flip red-revealed"
  } else if (bColor == "orange") {
    event.target.className = "orange-revealed flip"
  } else if (bColor == "blue") {
    event.target.className = "flip blue-revealed"
  } else if (bColor == "purple") {
    event.target.className = "purple-revealed flip"
  } else if (bColor == "green") {
    event.target.className = "green-revealed flip"
  } else if (bColor.includes("orange-revealed")) {
    event.target.className = "orange"
  } else if (bColor.includes("blue-revealed")) {
    event.target.className = "blue"
  } else if (bColor.includes("purple-revealed")) {
    event.target.className = "purple"
  } else if (bColor.includes("green-revealed")) {
    event.target.className = "green"
  } else {
    event.target.className = "red"
  }


    const flipped = document.querySelectorAll('#game .flip')
    const score = document.getElementById("score")
    
    

    ///  FOR RED CARDS
    const revealRed = gameContainer.querySelector(".red-revealed")
    const redChecker = event.target.classList.contains('red-revealed')
    const redFlipLength = document.querySelectorAll("#game .red-revealed")
    const redNodeList = redFlipLength.item(1)
   
    if (redFlipLength.length === 1 && flipped.length >= 2){
  setTimeout(function(){
    revealRed.classList.add('red');
    revealRed.classList.remove('flip');
    revealRed.classList.remove('red-revealed')},1000)

}
  if (redChecker == true && redFlipLength.length == 2){
    revealRed.classList.add('Matched');
    revealRed.classList.remove('flip');
    redNodeList.classList.value = "red-revealed"
    scoreCount += 100;
    score.innerText = scoreCount
} 


    ///  FOR BLUE CARDS
    const revealBlue = gameContainer.querySelector(".blue-revealed")
    const blueChecker = event.target.classList.contains('blue-revealed')
    const blueFlipLength = document.querySelectorAll("#game .blue-revealed")
    const blueNodeList = blueFlipLength.item(1)

    if (blueFlipLength.length === 1 && flipped.length >= 2){
  setTimeout(function(){
    revealBlue.classList.add('blue');
    revealBlue.classList.remove('flip');
    revealBlue.classList.remove('blue-revealed')},1000)
}

  if (blueChecker == true && blueFlipLength.length == 2){
    revealBlue.classList.add('Matched');
    revealBlue.classList.remove('flip');
    blueNodeList.classList.value = "blue-revealed"
    scoreCount += 100;
    score.innerText = scoreCount
} 

    ///  FOR ORANGE CARDS
    const revealOrange = gameContainer.querySelector(".orange-revealed")
    const orangeChecker = event.target.classList.contains('orange-revealed')
    const orangeFlipLength = document.querySelectorAll("#game .orange-revealed")
    const orangeNodeList = orangeFlipLength.item(1)
  
    if (orangeFlipLength.length === 1 && flipped.length >= 2){
  setTimeout(function(){
      revealOrange.classList.add('orange');
      revealOrange.classList.remove('flip');
      revealOrange.classList.remove('orange-revealed')},1000)
  }
  
    if (orangeChecker == true && orangeFlipLength.length == 2){
      revealOrange.classList.add('Matched');
      revealOrange.classList.remove('flip');
      orangeNodeList.classList.value = "orange-revealed"
      scoreCount += 100;
      score.innerText = scoreCount  
  } 

    ///  FOR GREEN CARDS
    const revealGreen = gameContainer.querySelector(".green-revealed")
    const greenChecker = event.target.classList.contains('green-revealed')
    const greenFlipLength = document.querySelectorAll("#game .green-revealed")
    const greenNodeList = greenFlipLength.item(1)

    if (greenFlipLength.length === 1 && flipped.length >= 2){
  setTimeout(function(){
      revealGreen.classList.add('green');
      revealGreen.classList.remove('flip');
      revealGreen.classList.remove('green-revealed')},1000)
}

    if (greenChecker == true && greenFlipLength.length == 2){
      revealGreen.classList.add('Matched');
      revealGreen.classList.remove('flip');
      greenNodeList.classList.value = "green-revealed"
      scoreCount += 100;
      score.innerText = scoreCount
} 

    ///  FOR PURPLE CARDS
    const revealPurple = gameContainer.querySelector(".purple-revealed")
    const purpleChecker = event.target.classList.contains('purple-revealed')
    const purpleFlipLength = document.querySelectorAll("#game .purple-revealed")
    const purpleNodeList = purpleFlipLength.item(1)

    if (purpleFlipLength.length === 1 && flipped.length >= 2){
  setTimeout(function(){
      revealPurple.classList.add('purple');
      revealPurple.classList.remove('flip');
      revealPurple.classList.remove('purple-revealed')},1000)
}

    if (purpleChecker == true && purpleFlipLength.length == 2){
      revealPurple.classList.add('Matched');
      revealPurple.classList.remove('flip');
      purpleNodeList.classList.value = "purple-revealed"
      scoreCount += 100;
      score.innerText = scoreCount
} 

// let winner = prompt("YOU WIN !! Please enter your name, Champion: ")
const champ = document.getElementById("winner")

if(scoreCount >= 500){
  setTimeout(function() {
    let winner = prompt("YOU WIN !! Please enter your name, Champion: ")
    champ.innerText = winner
  },500)
}
    
}

function refreshPage(){
  window.location.reload();
} 

const letters = document.querySelectorAll('.title');

function randomRGB(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`
}

setInterval(function(){
  for(let letter of letters){
       letter.style.color = randomRGB();
       letter.style.fontSize = '4rem';
  }     
},800)

const resetButton = document.getElementById("reset")
resetButton.addEventListener('click',function(){})

// when the DOM loads
createDivsForColors(shuffledColors);
