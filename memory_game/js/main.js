let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

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
	let flippedCard = cards[cardId].rank;

	cardsInPlay.push(flippedCard);

	console.log("User flipped " + flippedCard);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	console.log("");

	checkForMatch();
}

flipCard(0);
flipCard(2);