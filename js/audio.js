/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game App
Name: Brandon White
Date of Last Modification: 23/08/2019
audio.js
******************************************/

'use strict';

/**
 * IEFE | Creates sound object with five properties:
 * One for each sound fx in game, set to an index
 */
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

    /**
     * Establishes a new AudioContext to the window object
     * Instatiates a new BufferLoader class
     */
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
        /**
         * Returns method to play audio on command:
         * Creates audio buffer to hold decoded sound fx,
         * sets source for each sound,
         * increases the volume for each sound,
         * connects the source to the volume increase,
         * then connects the volume increase to the user's speakers
         * @param {url} sound the sound file
         * @param {string} option start or stop sound
         */
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