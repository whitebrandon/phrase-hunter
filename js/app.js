/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game App
Name: Brandon White
Date of Last Modification: 23/08/2019
app.js
******************************************/

'use strict';

    /* Global Variables */
    let game;

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
     * Creates and displays button
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
    const background = new Audio();
    background.src = "audio/music/background.mp3";
    background.loop = true;

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();

    window.addEventListener('load', function () {
        const src = context.createMediaElementSource(background);
        const gainNode = context.createGain();
        gainNode.gain.value = .35;
        src.connect(gainNode);
        gainNode.connect(context.destination);
    }, false);

    document.getElementById('btn__reset').addEventListener('click', function () {
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
        game.handleInteraction(e.type, e.target);
        })
    })

    document.addEventListener('keyup', function (e) {
        if (qwerty) {
            if (qwerty.includes(e.key)) {
                game.handleInteraction(e.type, undefined, e.key);
            }
        }
    })

    musicBtn.addEventListener('change', function (e) {
        e.target.checked ? background.play() : background.pause();
    }, false);

    radioBtns.forEach(input => {
        input.addEventListener('change', function (e) {
            const theme = document.getElementById('theme');
            e.target.checked ? theme.setAttribute('href', `css/${e.target.id}.css`) : theme.setAttribute('href', 'css/normal.css');
        }, false);
    });