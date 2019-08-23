/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

'use strict';

    class Phrase {
        constructor (phrase, category, hint) {
            this.phrase = phrase.toLowerCase();
            this.category = category.toLowerCase();
            this.hint = hint.toLowerCase();
        }
        /** 
         * Adds line break if phrase is longer than game board
         */
        addLineBreak () {
            const spaces = Array.from(document.querySelectorAll('#phrase li.space'));
            spaces.forEach(space => space.classList.remove('break'));
            while (spaces.some(space => (space.offsetLeft + 15) >= innerWidth)) {
                const reference = spaces.find(space => (space.offsetLeft + 15) >= innerWidth);
                if (reference) {
                    const refIndex = spaces.indexOf(reference);
                    const breakSpot = spaces[refIndex - 1];
                    if (breakSpot) {
                        breakSpot.classList.contains('break') ? spaces[refIndex].classList.add('break') : breakSpot.classList.add('break');
                    } else { break; }
                }
            };
            if (document.querySelector('#phrase li:last-child').offsetLeft + 65 >= innerWidth &&
                spaces[spaces.length - 1]) {
                spaces[spaces.length - 1].classList.add('break');
            }
        }
        /**
         * Display phrase on game board
         */
        addPhraseToDisplay () {
            const phraseList = document.querySelector('#phrase ul');
            for (let i = 0; i < this.phrase.length; i++) {
                if (/^\w{1}$/.test(this.phrase[i])) {
                    const listItem = document.createElement('li');
                    listItem.classList.add('hide', 'letter', this.phrase[i]);
                    listItem.textContent = this.phrase[i];
                    phraseList.appendChild(listItem);
                } else if (/^\s{1}$/.test(this.phrase[i])) {
                    const listItem = document.createElement('li')
                    listItem.className = 'space';
                    phraseList.appendChild(listItem)
                }
            }
            this.addLineBreak();
        }
        /**
         * Creates a div el, give it an attribute, a child par, and inserts it into the DOM
         * @param {array} el List of elements to be created
         * @param {array} attr List of attributes to be added to elements
         * @param {array} value List of values that attributes need to be set to
         * @param {string} refChild The element to insert the div element before
         */
        createSection (el, attr, value, refChild) {
            for (let i = 0; i < el.length; i++) {
                const tag = document.createElement(el[i]);
                if (i === 0 || i === 2) {
                    tag.setAttribute(attr[i], value[i]);
                    if (i === 0) {
                        tag.className = "section";
                        mainContainer
                        .insertBefore(tag, document.getElementById(refChild));
                    }
                }
                if (i === 1 || i === 2) {
                    document.getElementById(value[i - 1]).appendChild(tag);
                }
            }
        }
        /**
         * Display category on game board
         */
        addCategoryToDisplay () {
            this.createSection(["div", "p"], ['id'], ['category'], 'qwerty');
            document.querySelector('#category p')
                    .innerHTML = `<span style="font-size:16px">the category is</span>
                                  </br><span style="font-weight:500">${this.category}</span>`;
        }
        /**
         * Adds hint to game board, but hides it within an Click event
         */
        addHintToDisplay () {
            this.createSection(["div", "p", "button"], ["id", undefined, "id"],
                                ["hint", "hint", "get-hint"], 'scoreboard');
            document.querySelector('#hint p')
                    .textContent = "click the button below to trade a heart for a hint";
            document.querySelector('#hint button').textContent = "hint";
            document.getElementById('get-hint').addEventListener('click', function buyHint () {
                document.getElementById('get-hint').removeEventListener('click', buyHint);
                if (soundBtn.checked) {
                    audio.playSound('keypress', 'start');
                }
                const heart = document.querySelectorAll('#scoreboard img[src="images/liveHeart.png"]');
                if (heart.length > 1) {
                    game.activePhrase.showHint();
                    game.removeLife();
                }
            })
        }
        /**
         * Shows hint and kills one heart
         */
        showHint () {
            document.querySelector('#hint p').innerHTML = this.hint;
        }
        /**
         * Checks if passed letter is in phrase
         * @param {string} letter - letter to check
         */
        checkLetter (letter) {
            return this.phrase.includes(letter);
        }
        /**
         * Displays passed letter on screen after a match is found
         * @param {string} letter - letter to display
         */
        showMatchedLetter (letter) {
            const list = document.getElementsByClassName(letter);
            for (let item of list) {
                item.classList.replace('hide', 'show');
            }
        }
    }