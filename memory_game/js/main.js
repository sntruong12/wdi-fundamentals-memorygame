console.log("Up and running");

var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];

var cardOne = cards[2];
var cardTwo = cards[3];

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log(cardsInPlay);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You've found a match!");
  } else {
    alert("Sorry you're trash!")
  }
}