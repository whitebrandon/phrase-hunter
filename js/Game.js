/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.ready = false;
    }
    /**
     * Creates phrases for use in game
     * @return {array} an array of phrases that could be used in the game
     */
    createPhrases () {
        const phraseList = [];
        phrase.forEach(object => phraseList.push(new Phrase(object.phrase, object.category, object.hint)));
        return phraseList;
    }
    /**
     * Gets random phrase from this.phrases
     * @return {object} phrase object chosen to be used
     */
    getRandomPhrase () {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    /**
     * Adds listener to window
     */
    onScreenResize () {
        window.addEventListener('resize', function () {
            game.activePhrase.addLineBreak();
            const modal = this.document.getElementById('modal-button');
            if (this.innerWidth <= 1024) {
                modal.innerHTML = "&#9776;";
            } else {
                modal.innerHTML = 'AUDIO &#x2699;';
            }
        }, false);
    }
    /**
     * Begins game by selecting a random phrase and displaying it to the user
     */
    startGame () {
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.activePhrase.addCategoryToDisplay();
        this.activePhrase.addHintToDisplay();
        this.addInstructionsToDisplay();
        this.onScreenResize();
        this.ready = true;
    }
    /**
     * Handles onscreen keyboard button clicks and keypresses
     * @param {Event.type} type - the type of event that triggered function
     * @param {HTMLButtonElement} button - the clicked button element
     * @param {keypress value} key - the value of the key that was pressed
     */
    handleInteraction (type, button, key) {
        if (this.ready) {
                if (type === "keyup") {
                const keyboard = Array.from(document.querySelectorAll('#qwerty button'));
                button = keyboard.find(button => button.textContent === key);
            };
            if (this.activePhrase.checkLetter(button.textContent)) {
                button.classList.add('chosen');
                button.setAttribute('disabled', true);
                this.activePhrase.showMatchedLetter(button.textContent);
                this.checkForWin();
                if (this.checkForWin()) {
                    this.ready = false;
                    setTimeout(this.gameOver, 750, true);
                }
            } else {
                button.classList.add('wrong');
                button.setAttribute('disabled', true);
                this.removeLife();
            };
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
        document.querySelectorAll('#scoreboard img')[this.missed].setAttribute("src", "images/lostHeart.png");
        this.missed += 1;
        if (this.missed === 4 && document.querySelector('#hint p').textContent !== this.activePhrase.hint) {
            document.getElementById('hint').style.display = "none";
        } else if (this.missed === 5) {
            this.ready = false;
            setTimeout(this.gameOver, 500, false);
        }
    }
    /**
     * Selects a message to be displayed
     * @param {array} list - list of messages
     * @return {string} random message from list array
     */
    getRandomMessage (list) {
        return list[Math.floor(Math.random() * list.length)]
    };
    /**
     * Displays game over message
     * @param {boolean} gameWon - whether or not the user won the game
     */
    gameOver (gameWon) {
        overlay.style.display = "flex";
        const winningMessages = ["Congratulations! You won!", 
                                 "Great job, Phrase Master!",
                                 "You got it right. Good stuff!",
                                 "Not bad, but the next one won't be so easy.",
                                 "You're pretty smart. You must read a lot."];
        const losingMessages = ["You lost all of your ♥s. Wanna play again?",
                                "Sorry, but nobody wins them all.",
                                "Better luck next time, Amigo.",
                                "If at first you don't succeed... Try, try again.",
                                "Take a mulligan. It'll be our little secret."]; 
        if (gameWon) {
            document.getElementById('game-over-message').textContent = game.getRandomMessage(winningMessages);
            overlay.classList.replace('start', 'win');
        } else {
            document.getElementById('game-over-message').textContent = game.getRandomMessage(losingMessages);
            overlay.classList.replace('start', 'lose');
        }
    }
    /**
     * Adds instructions to display
     */
    addInstructionsToDisplay () {
        document.getElementById('banner').appendChild(document.createElement('p'))
                .innerHTML = `win by guessing the phrase before losing all of your hearts`;
    }
    /**
     * Resets game to initial state
     */
    reset () {
        document.querySelectorAll('#phrase li').forEach(li => li.parentNode.removeChild(li));
        document.querySelectorAll('#qwerty button').forEach(button => {
            button.removeAttribute('disabled');
            button.classList.remove('chosen', 'wrong');
        document.querySelectorAll('#scoreboard img').forEach(heart => heart.setAttribute("src", "images/liveHeart.png"));
        overlay.classList.remove('win', 'lose');
        overlay.classList.add('start');
        const mainContainer = document.querySelector('.main-container');
            if (document.getElementById('category') && document.getElementById('hint')) {
                mainContainer.removeChild(document.getElementById('category'));
                mainContainer.removeChild(document.getElementById('hint'));
                document.getElementById('banner').removeChild(document.querySelector('#banner p'));
            }
        });
    }
}