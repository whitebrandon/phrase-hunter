/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game App
Name: Brandon White
Date of Last Modification: 23/08/2019
BufferLoader.js
******************************************/

'use strict';

/**
     * BufferLoader class declaration
     * @class
     * @name BufferLoader
     */
class BufferLoader {
    // Load buffer asynchronously

    /**
         * Represents an Audio Buffer
         * @constructor
         */
    constructor (context, urlList, callback) {
        /**
         * BufferLoader class property declarations
         * @property {interface} context audio-processing graph
         * @property {array} urlList list of absolute paths for sound fx
         * @property {function} callback function to call after audio files have been received and decoded
         * @property {array} bufferList starts off empty, but will end up holding all sound fx
         */
        this.context = context;
        this.urlList = urlList;
        this.onload = callback;
        this.bufferList = [];
    }
    /**
     * Makes XHR request for sound, decodes it,
     * then calls finishedLoading from audio.js
     * when the bufferList has all the sound fx
     * @param {string} url location of audio file
     * @param {number} index index of audio file
     */
    loadBuffer (url, index) {
        const loader = this;
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = "arraybuffer";
        request.onload = function () {
            // Asynchronously decode the audio file data in request.response
            loader.context.decodeAudioData(request.response).then(function(decodedData) {
                loader.bufferList[index] = decodedData;
                if (loader.bufferList.length === 5) {
                    loader.onload(loader.bufferList);
                }
            })
        }
        request.onerror = function () {
            alert('BufferLoader: XHR error');
        }
        request.send();
    }
    /**
     * Loads sounds into game by calling loadBuffer on each item in urlList
     */
    load () {
        for (let i = 0; i < this.urlList.length; i++) {
        this.loadBuffer(this.urlList[i], i);
        }
    }
}