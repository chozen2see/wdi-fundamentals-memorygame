let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

/*

let cardOne = cards[0];
let cardTwo = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

for (c = 0; c < cardsInPlay.length; c++) {
	console.log("User flipped " + cardsInPlay[c]);
}

*/

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again.");
		}
	}
}

function flipCard(cardId) {
	let flippedCard = cards[cardId];

	cardsInPlay.push(flippedCard);

	console.log("User flipped " + flippedCard);

	checkForMatch();
}

flipCard(0);
flipCard(1);