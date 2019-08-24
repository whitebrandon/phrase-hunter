/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game App
Name: Brandon White
Date of Last Modification: 23/08/2019
app.js
******************************************/

'use strict';

    /* Global Variables */

    let game; // ← will hold new Game object

    const overlay = document.getElementById('overlay');
    const qwertyKeys = document.querySelectorAll('#qwerty button');
    const banner = document.getElementById('banner');
    let qwerty;
    const radioBtns = Array.from(document.querySelectorAll('input[type="radio"]'));
    const toggle = document.createElement('div');
    toggle.setAttribute('id', 'toggle');
    toggle.className = "section";
    mainContainer.insertBefore(toggle, document.getElementById('scoreboard'));
    /**
     * Creates and displays button to page
     * @param {HTML entity | string} HTML The label text for the button
     */
    const createAudioToggles = (HTML) => {
        const toggleSwitch = document.createElement('label');
        const input = document.createElement('input');
        toggle.appendChild(toggleSwitch);
        toggleSwitch.innerHTML = HTML;
        toggleSwitch.appendChild(input);
        toggleSwitch.className = "switch";
        input.setAttribute('type', "checkbox");
        input.setAttribute('checked', true);
    }

    createAudioToggles("&#127925; Music");
    createAudioToggles("&#128266; Sound");

    const audioSettings = Array.from(document.querySelectorAll('.switch'));
    const musicBtn = audioSettings[0].firstElementChild;
    const soundBtn = audioSettings[1].firstElementChild;
    /**
     * Audio object instance declaration
     * @var {Object} background background music
     */
    const background = new Audio();
    background.src = "audio/music/background.mp3";
    background.loop = true;

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();

    window.addEventListener('load', function () {
        /**
         * Connects background music to user's speakers to be played
         */
        const src = context.createMediaElementSource(background);
        const gainNode = context.createGain();
        gainNode.gain.value = .35;
        src.connect(gainNode);
        gainNode.connect(context.destination);
    }, false);

    document.getElementById('btn__reset').addEventListener('click', function () {
        /**
         * On click: 
         * * Plays background music
         * * Instantiates new Game class
         * * Starts game
         * * Adds qwerty keys to an array 
         */
        if (musicBtn.checked) {
            background.play();
            context.resume();
        }
        game = new Game ();
        game.startGame();
        document.querySelector('.button').style.display = "block";
        qwerty = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m",];
    });

    qwertyKeys.forEach((key) => {
        key.addEventListener('click', function (e) {
            /**
             * Adds listener to all buttons of on screen keyboard
             * @param {event} e click event
             */
            game.handleInteraction(e.type, e.target);
        })
    })

    document.addEventListener('keyup', function (e) {
        /**
         * Adds listener to to keyup so that user can guess letter using
         * onboard keyboard
         * @param {event} e keyup event
         */
        if (qwerty) {
            if (qwerty.includes(e.key)) {
                game.handleInteraction(e.type, undefined, e.key);
            }
        }
    })

    musicBtn.addEventListener('change', function (e) {
        /**
         * Adds listener to music button
         * and makes it so that user can play and pause music
         * @param {event} e change event
         */
        e.target.checked ? background.play() : background.pause();
    }, false);

    radioBtns.forEach(input => {
        input.addEventListener('change', function (e) {
            /**
             * Adds listener to each theme button in modal window
             * On click, the style of the page is changed to match theme selected
             * @param {event} e change event
             */
            const theme = document.getElementById('theme');
            e.target.checked ? theme.setAttribute('href', `css/${e.target.id}.css`) : theme.setAttribute('href', 'css/normal.css');
        }, false);
    });