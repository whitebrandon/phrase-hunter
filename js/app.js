/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const overlay = document.getElementById('overlay');

document.getElementById('btn__reset').addEventListener('click', function () {
    game = new Game ();
    game.reset();
    game.startGame();
});

document.querySelectorAll('#qwerty button').forEach((key) => {
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
