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
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]')); 

    document.getElementById('btn__reset').addEventListener('click', function () {
        game = new Game ();
        game.reset();
        game.startGame();
        document.querySelector('.button').style.display = "block";
        qwerty = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k",                 "l", "z", "x", "c", "v", "b", "n", "m",];
    });

    qwertyKeys.forEach((key) => {
        key.addEventListener('click', function (e) {
        game.handleInteraction(e.type, e.target);
        })
    })

    document.addEventListener('keyup', function (e) {
        if (qwerty.includes(e.key)) {
            game.handleInteraction(e.type, undefined, e.key);
        }
    })