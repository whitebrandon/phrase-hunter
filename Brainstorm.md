# Phrase Hunter
* The game starts when the player clicks on the ‘start game’ button. 
* A start game **scene** disappears and a new **scene** appears in the browser window with a series of squared elements shown on the page
	1. Select phrase | Find how many words in phrase | Find how many characters in phrase | Add the appropriate amount of squared elements to page | Assign letters to squared elements
		* If phrase has special character, show it on page
	2. Show category element and connect clue to hint element
	3. Show live hearts
	4. Show onscreen keyboard
* The squared elements are grouped into what appears to be words
* The words are hidden, because the squared elements are blank
* At the top right of the **scene** is a block with a music note symbol
* If the player clicks on the music note a modal window appears
* In the modal window are two elements
	* One reads turn off music and the other reads turn off sound fx
	* If they’re clicked the music turns off and the sounds fx turns off respectively and the elements change to read turn on music and turn on sound fx
* The modal box has a little x in the top right corner which closes the modal box
* Below the hidden phrase is an element that displays the category of the phrase
* Below the category element is an onscreen keyboard
	1. A letter can be chosen via clicking on the individual keyboard element, or by pressing the key. When a letter is clicked/pressed, the letter is disabled on the onscreen keyboard.
		* If an if statement is used to determine whether to react to the keyboard or click event, then perhaps all the letters are in an array, and when the letter is clicked/pressed it is then removed from the array, so that it doesn't trigger the event. Or it may not matter if the event is retriggered (as there will be nothing new to reveal), so while the program would react multiple times to the triggering of a previously clicked/pressed letter, the player would see no changes to occur in the window.
	2. The phrase is searched for all occurences of that letter, and if found that letter is revealed in the phrase.
	3. If the letter is not found, a heart dies (from left to right).
		* The hearts would be kept in an array. To kill a heart, the first live heart in an array would be filtered out. And its status would change from live heart to lost heart. The image would be replaced. Or both images could be on the page at the same time, but (if they are positioned absolutely???) the z-index would be changed, so that the lost heart appears above the live heart.
* Below the onscreen keyboard is an element that reads hint
	* If the hint element is clicked it spins around to reveal a hint 
* Beneath the hint element are five “shaded-in” hearts
	* Each time the player chooses a letter that is not in the puzzle, one of the hearts dies (loses its color)
* The game is over when either the player guesses the entire puzzle, or when all of the player’s hearts die

## Potential Classes
class Game {}
class Phrase {}
class Letter {}
class Heart {}
class Modal {}
class Scene {}

## Potential Methods

startGame() // ← sets the game as ready, selects a random phrase objects, prints phrase to screen
showSoundModal() // ← Opens a modal window which allows the player to toggle the music and/or sound fx on or off

