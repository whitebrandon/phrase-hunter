/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game App
Name: Brandon White
Date of Last Modification: 23/08/2019
audio.js
******************************************/

'use strict';

const audio = (function () {
    const sounds = {
        'correctLetter' : 0,
        'wrongLetter' : 1,
        'gameLost' : 2,
        'gameWon' : 3,
        'keypress' : 4,
    }
    let context = null;
    let bufferLoader = null;
    let bufferList = [];

    function init () {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        context = new AudioContext();

        bufferLoader = new BufferLoader(
            context, 
            [
              "https://whitebrandon.github.io/audio/sounds/correct_letter.wav",
              "https://whitebrandon.github.io/audio/sounds/wrong_letter.wav",
              "https://whitebrandon.github.io/audio/sounds/game_lost.wav",
              "https://whitebrandon.github.io/audio/sounds/game_won.wav",
              "https://whitebrandon.github.io/audio/sounds/keypress.wav",
              "https://whitebrandon.github.io/audio/music/Oniku Loop2.wav",
            ], 
            finishedLoading
        );
        
        bufferLoader.load()
    }
    function finishedLoading (bufferedList) {
        bufferList = bufferedList;
    }

    window.onload = init;

    return {
        playSound: function (sound, option) {
            let source = context.createBufferSource();
            source.buffer = bufferList[sounds[sound]];
            const gainNode = context.createGain();
            gainNode.gain.value = 7.5;
            source.connect(gainNode);
            gainNode.connect(context.destination);
            source[option]();
        }
    }
}());