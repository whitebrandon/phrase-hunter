/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

'use strict';

    /* Global Variables */
    let game;

    const overlay = document.getElementById('overlay');
    const qwertyKeys = document.querySelectorAll('#qwerty button');
    const banner = document.getElementById('banner');
    let qwerty;
    
    const radioboxes = Array.from(document.querySelectorAll('input[type="radio"]'));

    const toggle = document.createElement('div');
    toggle.setAttribute('id', 'toggle');
    toggle.className = "section";
    mainContainer.insertBefore(toggle, document.getElementById('scoreboard'));
    toggle.innerHTML = 
                        `   <label class="switch">                          
                                <input type="checkbox" checked>&#127925; Music</button>
                            </label>
                            <label class="switch">
                                <input type="checkbox" checked>&#128266; Sound</button>
                            </label>
                        `; 
    const audioSettings = Array.from(document.querySelectorAll('.switch'));
    const musicBtn = audioSettings[0];
    const soundBtn = audioSettings[1];

    const background = new Audio();
    background.src = "audio/music/background.mp3";
    background.loop = true;

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();

    window.addEventListener('load', function () {
        const src = context.createMediaElementSource(background);
        src.connect(context.destination);
    }, false);

    document.getElementById('btn__reset').addEventListener('click', function () {
        game = new Game ();
        game.reset();
        game.startGame();
        document.querySelector('.button').style.display = "block";
        qwerty = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k",                 "l", "z", "x", "c", "v", "b", "n", "m",];
        background.play();
        context.resume();
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
        if (e.target.checked) {
            background.play();
        } else {
            background.pause();
        }
    }, false);

    radioboxes.forEach(input => {
        input.addEventListener('change', function (e) {
            if (e.target.checked) {
                document.getElementById('theme').setAttribute('href', e.target.value);
            } else {
                document.getElementById('theme').setAttribute('href', 'css/normal.css');
            }
        }, false);
    });