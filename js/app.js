/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /* Global Variables */
    let game;

    const overlay = document.getElementById('overlay');
    const qwertyKeys = document.querySelectorAll('#qwerty button');
    const banner = document.getElementById('banner');
    const mainContainer = document.querySelector('.main-container');

    document.getElementById('btn__reset').addEventListener('click', function () {
        game = new Game ();
        game.reset();
        game.startGame();
        document.querySelector('.button').style.display = "block";
    });

    qwertyKeys.forEach((key) => {
        key.addEventListener('click', function (e) {
        game.handleInteraction(e.type, e.target);
        })
    })

    document.addEventListener('keyup', function (e) {
        const qwerty = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k",                 "l", "z", "x", "c", "v", "b", "n", "m"];
        if (qwerty.includes(e.key)) {
            game.handleInteraction(e.type, undefined, e.key);
        }
    })
});