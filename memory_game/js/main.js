console.log("Up and running");

var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!")
  } else {
    console.log("Sorry, you're trash at this!")
  }
}

var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId]);

  cardsInPlay.push(cards[cardId])
  
  checkForMatch();

  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You've found a match!");
    } else {
      alert("Sorry, you're trash!")
    }
  }
};

flipCard(0);
flipCard(2);