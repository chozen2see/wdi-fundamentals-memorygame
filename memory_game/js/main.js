let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

for (c = 0; c < cardsInPlay.length; c++) {
	console.log("User flipped " + cardsInPlay[c]);
}

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

