/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game App
Name: Brandon White
Date of Last Modification: 06/07/2020
Game.js
******************************************/

'use strict';

    /**
     * Game class declaration
     * @class
     * @name Game
     */
    class Game {
        constructor () {
            this.missed = 0;
            this.phrases = this.createPhrases();
            this.activePhrase = null;
            this.ready = false;
        }
	    /**
         * Begins the game by removing the starting overlay, 
         * selecting a random phrase, hiding it, and displaying it on the page,
         * adding the category of the phrase to the display,
         * adding a hint for the phrase to the display (while hiding it),
         * adding instructions to the display,
         * calling for the active phrase to be evaluated for line breaks,
         * and setting the state of the game to active
         */
        startGame () {
            overlay.style.display = "none";
            audioSettings.forEach(label => label.style.position = "static");
            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay();
            this.activePhrase.addCategoryToDisplay();
            this.activePhrase.addHintToDisplay();
            this.addInstructionsToDisplay();
            this.onScreenResize();
            this.ready = true;
        }
        /**
         * Creates phrases for use in game
         * @return {array} an array of phrases that could be used in the game
         */
        createPhrases = () => phrase.map(object => new Phrase(object.phrase, object.category, object.hint));
        /**
         * Gets random phrase from this.phrases
         * @return {object} phrase object chosen to be used
         */
        getRandomPhrase = () => this.phrases[Math.floor(Math.random() * this.phrases.length)];
	    /**
         * Adds instructions to display
         */
        addInstructionsToDisplay () {
            banner.appendChild(document.createElement('p'))
                  .innerHTML = `win by guessing the phrase before losing all of your hearts`;
        }
        /**
         * Adds listener to resizing of window object which
         * calls for the active phrase to be evaluated for line breaks
         * so that phrase remains responsive, while not splitting one word into multiples.
         * If width of screen is lt or eq to 1024 px, the THEME button's text changes to
         * a trigram 
         */
        onScreenResize () {
            window.addEventListener('resize', function () {
                game.activePhrase.addLineBreak();
                const modal = this.document.getElementById('modal-button');
                this.innerWidth <= 1024 ? modal.innerHTML = "&#9776;" : modal.textContent = "THEME";
            }, false);
        }
        /**
         * Handles onscreen keyboard button clicks and keypresses
         * Checks if keyed letter or clicked letter matches letter in phrase,
         * disables key, and if letter matches, plays sound fx and checks for win. 
         * If game is won, plays sound fx, sets the state of game to inactive, then calls gameOver and reset.
         * If letter doesn't match, plays sound fx and calls removeLife.
         * @param {Event.type} type - the type of event that triggered function
         * @param {HTMLButtonElement} button - the clicked button element
         * @param {keypress value} key - the value of the key that was pressed
         */
        handleInteraction (type, button, key) {
            if (this.ready) {
                if (type === "keyup") button = qwertyKeys.find(button => button.textContent === key);
                if (this.activePhrase.checkLetter(button.textContent)) {
                    checkSound(["keypress", "correctLetter"], "start");
                    this.disableLetter(button, "chosen");
                    this.activePhrase.showMatchedLetter(button.textContent);
                    if (this.checkForWin()) {
                        checkSound(["gameWon"], "start");
                        this.end(750, 700, true);
                    }
                } else {
                    checkSound(["keypress", "wrongLetter"], "start");
                    this.disableLetter(button, "wrong");
                    this.removeLife();
                };
            }
        }
        /**
         * Disables letter after its been selected
         * @param {string} button the qwerty letter that matches the player's selection
         * @param {string} className the class that's added to the button
         */
        disableLetter (button, className) {
            button["classList"].add(className);
            button["setAttribute"]('disabled', true);
            qwerty.splice(qwerty.indexOf(button.textContent), 1);
        }
        /**
         * Checks for winning move
         * @return {boolean} if game has been won ? true : false
         */
        checkForWin = () => document.getElementsByClassName('hide').length > 0 ? false : true;
        /**
         * Removes a life from the scoreboard
         * Increases the value of the missed property
         * Removes hint option if not already utilized by fourth miss
         * Checks if a player has remaining lives and ends game if player is out
         */
        removeLife () {
            document.querySelectorAll('#scoreboard img')[this.missed].setAttribute("src", "images/lostHeart.png");
            this.missed += 1;
            if (this.missed === 4 && document.querySelector('#hint p').innerHTML !== this.activePhrase.hint) {
                document.getElementById('hint').style.display = "none";
            } else if (this.missed === 5) {
                checkSound(["gameLost"], "start");
                this.end(500, 450, false);
            }
        }
	    /**
         * Displays game over message
         * @param {boolean} gameWon - whether or not the user won the game
         */
        gameOver (gameWon) {
            overlay.style.display = "flex";
            const winningMessages = ["Congratulations! You won!", "Great job, Phrase Master!",
                                    "You got it right. Good stuff!", "Not bad, but the next one won't be so easy.",
                                    "You're pretty smart. You must read a lot."];
            const losingMessages = ["You lost all of your ♥s. Wanna play again?", "Sorry, but nobody wins them all.",
                                    "Better luck next time, Amigo.", "If at first you don't succeed... Try, try again.",
                                    "Take a mulligan. It'll be our little secret."];
            gameWon ? game.postGameOverMessage(winningMessages, "win") : game.postGameOverMessage(losingMessages, "lose");
            modal.modalBtn.style.display = "none";
            background.pause();
        }
        /**
         * Selects a message to be displayed
         * @param {array} list - list of messages
         * @return {string} random message from list array
         */
        getRandomMessage = (list) => list[Math.floor(Math.random() * list.length)];
        /**
         * Posts game-over message to display
         * @param {variable} messageType — The type of message to display on overlay
         * @param {string} outcome — Win or Lose 
         */
        postGameOverMessage (messageType, outcome) {
            document.getElementById('game-over-message').textContent = this.getRandomMessage(messageType);
            overlay.classList.replace('start', outcome);
        }
        /**
         * Ends the game
         * @param {integer} firstDelay delay in ms for gameOver method
         * @param {integer} secondDelay delay in ms for reset method
         * @param {boolean} outcome on win ? true : false
         */
        end (firstDelay, secondDelay, outcome) {
            this.ready = false;
            setTimeout(this.gameOver, firstDelay, outcome);
            setTimeout(this.reset, secondDelay);
        }
	     /**
         * Resets game to initial state:
         * Removes the phrase from the window
         * Enables and resets all qwerty keys
         * Resets live hearts
         * Resets overlay
         * Removes the instructions && the category and hint sections from the window
         */
        reset () {
            document.querySelectorAll('#phrase li').forEach(li => li.parentNode.removeChild(li));
            document.querySelectorAll('#qwerty button').forEach(button => {
                button.removeAttribute('disabled');
                button.classList.remove('chosen', 'wrong');
            });
            document.querySelectorAll('#scoreboard img')
                    .forEach(heart => heart.setAttribute("src", "images/liveHeart.png"));
            overlay.className = 'start';
            mainContainer.removeChild(document.getElementById('category'));
            mainContainer.removeChild(document.getElementById('hint'));
            banner.removeChild(document.querySelector('#banner p'));
        }
    }