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
     * Adds line break if phrase is longer than board
     */
    addLineBreak () {
        const spaces = Array.from(document.querySelectorAll('#phrase li.space'));
        spaces.forEach(space => space.classList.remove('break'));
        do {
            const reference = spaces.find(space => space.offsetLeft >= innerWidth - 50);
            if (reference !== undefined) {
                const breakSpot = spaces[spaces.indexOf(reference) - 1];
                breakSpot.classList.add('break');
            }
        } while (spaces.find(space => space.offsetLeft >= innerWidth) !== undefined);
        if (document.querySelector('#phrase li:last-child').offsetLeft > innerWidth - 65) {
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
     * Display category on game board
     */
    addCategoryToDisplay () {
        const div = document.createElement('div');
        div.setAttribute('id', "category");
        div.className = "section";
        const p = document.createElement('p');
        p.innerHTML = `<span style="font-size:16px">the category is</span> </br> <span style="font-weight:500">${this.category}</span>`;
        div.appendChild(p);
        document.querySelector('.main-container').insertBefore(div, document.getElementById('qwerty'));
    }
    /**
     * Adds hint to game board, but hides it
     */
    addHintToDisplay () {
        const div = document.createElement('div');
        div.setAttribute('id', "hint");
        div.className = "section";
        const p = document.createElement('p');
        const button = document.createElement('button');
        p.textContent = "click the button below to trade a heart for a hint";
        button.setAttribute('id', "get-hint");
        button.textContent = "hint";
        div.appendChild(p);
        div.appendChild(button);
        document.querySelector('.main-container').insertBefore(div, document.getElementById('scoreboard'));
        document.getElementById('get-hint').addEventListener('click', function buyHint () {
            document.getElementById('get-hint').removeEventListener('click', buyHint);
            const heart = Array.from(document.querySelectorAll('#scoreboard img[src="images/liveHeart.png"]'));
            if (heart.length > 1) {
                game.removeLife();
                game.activePhrase.showHint();
            }
        })
    }
    /**
     * Shows hint and kills one heart
     */
    showHint () {
        document.querySelector('#hint p').textContent = this.hint;
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