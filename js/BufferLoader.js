/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game App
Name: Brandon White
Date of Last Modification: 23/08/2019
BufferLoader.js
******************************************/

'use strict';

class BufferLoader {
    // Load buffer asynchronously
    constructor (context, urlList, callback) {
        this.context = context;
        this.urlList = urlList;
        this.onload = callback;
        this.bufferList = [];
        this.loadCount = 0;
    }
    /**
     * Makes request for sounds
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
                        if (++loader.loadCount === loader.urlList.length) {
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
     * Loads sounds into game
     */
    load () {
        for (let i = 0; i < this.urlList.length; i++) {
        this.loadBuffer(this.urlList[i], i);
        }
    }
}