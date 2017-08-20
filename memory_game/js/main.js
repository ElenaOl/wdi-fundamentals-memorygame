console.log("Up and running!");

var cards = [
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

var cardsInPlay = [];

var checkForMatch = function() 
{
	 if (cardsInPlay[0] === cardsInPlay[1]) 
	 {
	      alert("You found a match!");
	 }
	 else 
	 {
	      alert("Sorry, try again.");
	 }
}

var flipCard = function() 
{
	var currentImage = this.getAttribute('src');
    if (currentImage !== 'images/back.png') 
    {
    	return;
    }

	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) 
	{
	   checkForMatch();
	}
}

var reset = function()
{
  console.log('Hello I am reset');
  var gameBoard = document.getElementById('game-board');
  for (var i = 0; i < gameBoard.childNodes.length; i++)
  {
  	gameBoard.childNodes[i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
}

var createBoard = function()
{
	for (var cardId = 0; cardId < cards.length; cardId++)
	{
	  var cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', cardId);
      cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement);
	}

	document.getElementById('button').addEventListener('click', reset);
}

createBoard();
