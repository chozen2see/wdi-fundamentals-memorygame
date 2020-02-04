// Create array of card objects
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

// Keep track of flipped cards
let cardsInPlay = [];


function resetBoard() {
	// Reset the game board

	cardsInPlay = [];

	let cards = document.getElementsByTagName('img');

	for (let c = 0; c < cards.length; c++) {
		cards[c].setAttribute('src', 'images/back.png');
	}
}

function checkForMatch() {
	// If two cards have been flipped, do they match?

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

function flipCard() {
	// Flip the card to show the card face 

	let cardId = this.getAttribute('data-id');
	let flippedCard = cards[cardId].rank;

	cardsInPlay.push(flippedCard);
	this.setAttribute('src', cards[cardId].cardImage);

	checkForMatch();
}

function createBoard() {
	// Create the game board

	for (let c = 0; c < cards.length; c++) {
		// Create each card and add to the board

		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('alt', cards[c].rank + ' of ' + cards[c].suit);
		cardElement.setAttribute('data-id', c);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}	

	// Listen for click then reset the board
	let buttonReset = document.getElementsByTagName('button')[0];
	buttonReset.addEventListener('click', resetBoard);
}

// Create board once page loads
createBoard();

