/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.chosenLetter = null;
    }
    /**
     * Creates phrases for use in game
     * @return {array} an array of phrases that could be used in the game
     */
    createPhrases () {
        const phraseArray = [];
        for (let i = 0; i < phrase.length; i++) {
            let newPhrase = new Phrase (phrase[i].phrase, phrase[i].category, phrase[i].hint);
            phraseArray.push(newPhrase);
        }
        return phraseArray;
    }
    /**
     * Gets random phrase from this.phrases
     * @return {object} phrase object chosen to be used
     */
    getRandomPhrase () {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    /**
     * Begins game by selecting a random phrase and displaying it to the user
     */
    startGame () {
        document.getElementById('overlay').classList.remove('win', 'lose');
        document.getElementById('overlay').classList.add('start');
        document.getElementById('overlay').style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    /**
     * Handles onscreen keyboard button clicks
     * @param {HTMLButtonElement} button - the clicked button element
     */
    handleInteraction (button) {
        if (button) {
            if (this.activePhrase.checkLetter(button.textContent)) {
                button.classList.add('chosen');
                button.setAttribute('disabled', true)
                this.activePhrase.showMatchedLetter(button.textContent);
                this.checkForWin();
                if (this.checkForWin()) {
                    this.gameOver(true);
                    this.reset();
                }
            } else {
                button.classList.add('wrong');
                button.setAttribute('disabled', true)
                this.removeLife();
            }
        }   
    }
    /**
     * Checks for winning move
     * @return {boolean} if game has been won ? true : false
     */
    checkForWin () {
        return document.getElementsByClassName('hide').length > 0 ? false : true;
    }
    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if a player has remaining lives and ends game if player is out
     */
    removeLife () {
        document.querySelectorAll('#scoreboard img')[this.missed].setAttribute("src", "../images/lostheart.png");
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(false);
            this.reset();
        }
    }
    /**
     * Displays game over message
     * @param {boolean} gameWon - whether or not the user won the game
     */
    gameOver (gameWon) {
        document.getElementById('overlay').style.display = "flex";
        if (gameWon) {
            document.getElementById('game-over-message').textContent = "Congratulations! You Guessed the Phrase!";
            document.getElementById('overlay').classList.replace('start', 'win');
        } else {
            document.getElementById('game-over-message').textContent = "Oh No! You Lost Your ♥s. Wanna Try Again?";
            document.getElementById('overlay').classList.replace('start', 'lose');
        }
    }
    reset () {
        document.querySelectorAll('#phrase li').forEach(li => li.parentNode.removeChild(li));
        document.querySelectorAll('#qwerty button').forEach(button => {
            button.removeAttribute('disabled');
            button.classList.remove('chosen', 'wrong');
        document.querySelectorAll('#scoreboard img').forEach(heart => heart.setAttribute("src", "../images/liveheart.png"));
        });
    }
}