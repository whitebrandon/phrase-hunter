/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game App
Name: Brandon White
Date of Last Modification: 06/07/2020
BufferLoader.js
******************************************/

'use strict';

    /**
     * BufferLoader class declaration
     * @class
     * @name BufferLoader
     */
    class BufferLoader {    
        constructor (context, urlList, callback) {
            this.context = context;
            this.urlList = urlList;
            this.onload = callback;
            this.bufferList = [];
        }
        /**
         * Makes XHR request for sound, 
         * decodes it, 
         * then calls finishedLoading from audio.js when the bufferList has all the sound fx
         * @param {string} url location of audio file
         * @param {number} index index of audio file
         */
        loadBuffer (url, index) {
            fetch(url)
                .then(response => response.arrayBuffer())
                .then((buffer) => {
                    this.context.decodeAudioData(buffer, decodedData => {
                        this.bufferList[index] = decodedData;
                        this.bufferList.length === 5 && this.onload(this.bufferList);
                    })
                })
                .catch(reason => alert(`${reason} sound effect`));
        }
        /**
         * Loads sounds into game by calling loadBuffer on each item in urlList
         */
        load = () => this.urlList.forEach((url, index) => this.loadBuffer(url, index));
    }