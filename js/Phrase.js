/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase, category, hint) {
        this.phrase = phrase.toLowerCase();
        this.category = category.toLowerCase();
        this.hint = hint.toLowerCase();
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