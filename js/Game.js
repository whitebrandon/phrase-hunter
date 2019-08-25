/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game App
Name: Brandon White
Date of Last Modification: 23/08/2019
Game.js
******************************************/

'use strict';

    /**
     * Game class declaration
     * @class
     * @name Game
     */
    class Game {
        /**
         * Represents a game
         * @constructor
         */
        constructor () {
            /**
             * Game class property declarations
             * @property {number} number of incorrect player guesses
             * @property {Array} list of phrases to be used in game
             * @property {null} phrase currently in play
             * @property {boolean}  active state of the game
             */
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
         * Handles onscreen keyboard button clicks and keypresses
         * Checks if keyed letter or clicked letter matches letter in phrase,
         * disables key, and if letter matches, plays sound fx (if not turned off),
         * and checks for win. 
         * If game is won, plays sound fx (if not turned off),
         * sets the state of game to inactive, then calls gameOver and reset.
         * If letter doesn't match, plays sound fx (if not turned off).
         * @param {Event.type} type - the type of event that triggered function
         * @param {HTMLButtonElement} button - the clicked button element
         * @param {keypress value} key - the value of the key that was pressed
         */
        handleInteraction (type, button, key) {
            if (this.ready) {
                    if (type === "keyup") {
                    const keyboard = Array.from(qwertyKeys);
                    button = keyboard.find(button => button.textContent === key);
                };
                if (this.activePhrase.checkLetter(button.textContent)) {
                    if (soundBtn.checked) {
                        audio.playSound('keypress', 'start');
                        setTimeout(audio.playSound, 200, 'correctLetter', 'start');
                    }
                    button.classList.add('chosen');
                    button.setAttribute('disabled', true);
                    qwerty.splice(qwerty.indexOf(button.textContent), 1);
                    this.activePhrase.showMatchedLetter(button.textContent);
                    this.checkForWin();
                    if (this.checkForWin()) {
                        if (soundBtn.checked) {
                            audio.playSound('gameWon', 'start');
                        }
                        this.ready = false;
                        setTimeout(this.gameOver, 750, true);
                        setTimeout(this.reset, 700);
                    }
                } else {
                    if (soundBtn.checked) {
                        audio.playSound('keypress', 'start');
                        setTimeout(audio.playSound, 200, 'wrongLetter', 'start');
                    }
                    button.classList.add('wrong');
                    button.setAttribute('disabled', true);
                    qwerty.splice(qwerty.indexOf(button.textContent), 1);
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
                if (soundBtn.checked) {
                    audio.playSound('gameLost', 'start');
                }
                this.ready = false;
                setTimeout(this.gameOver, 500, false);
                setTimeout(this.reset, 450);
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
         * Posts game-over message to display
         * @param {variable} messageType — The type of message to display on overlay
         * @param {string} outcome — Win or Lose 
         */
        postGameOverMessage (messageType, outcome) {
            document.getElementById('game-over-message').textContent = this.getRandomMessage(messageType);
            overlay.classList.replace('start', outcome);
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
            if (gameWon) {
                game.postGameOverMessage(winningMessages, "win");
            } else {
                game.postGameOverMessage(losingMessages, "lose");
            }
            modal.modalBtn.style.display = "none";
            background.pause();
        }
        /**
         * Adds instructions to display
         */
        addInstructionsToDisplay () {
            banner.appendChild(document.createElement('p'))
                  .innerHTML = `win by guessing the phrase before losing all of your hearts`;
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
            overlay.classList.remove('win', 'lose');
            overlay.classList.add('start');
            if (document.getElementById('category') && document.getElementById('hint')) {
                mainContainer.removeChild(document.getElementById('category'));
                mainContainer.removeChild(document.getElementById('hint'));
                banner.removeChild(document.querySelector('#banner p'));
            }
        }
    }