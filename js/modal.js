
/******************************************
 *************** VARIABLES ****************
 ******************************************/

'use strict';

    const modal = document.createElement('div');
    const modalBtn = document.createElement('button');
    const mainContainer = document.querySelector('.main-container');

    mainContainer.insertBefore(modal, banner);
    modalBtn.setAttribute('id', 'modal-button');
    modalBtn.innerHTML = 'THEMES';
    modalBtn.className = 'button';
    banner.appendChild(modalBtn);
    modal.setAttribute('id', 'simple-modal');
    modal.className = 'modal';
    modal.innerHTML = `
                        <div class="modal-content">
                        <span class="close-button">&otimes;</span>
                        <h2>Themes</h2>
                        <div class="modal-body">
                                <label class="theme">Normal
                                    <input id="normal" type="radio" value="css/normal.css" name="theme" checked>
                                </label>
                                <label class="theme">Dark
                                    <input id="dark" type="radio" value="css/dark.css" name="theme">
                                </label>
                                <label class="theme">Superhero
                                    <input id="superhero" type="radio" value="css/superhero.css" name="theme">
                                </label>
                                <label class="theme">Movies
                                    <input id="movie" type="radio" value="css/movie.css" name="theme">
                                </label>
                                <label class="theme">Music
                                    <input id="music" type="radio" value="css/music.css" name="theme">
                                </label>
                                <label class="theme">Writing
                                    <input id="writing" type="radio" value="css/writing.css" name="theme">
                                </label>
                                <label class="theme">Emoji
                                    <input id="emoji" type="radio" value="css/emoji.css" name="theme">
                                </label>
                                <label class="theme">Philosophy
                                    <input id="philosophy" type="radio" value="css/philosophy.css" name="theme">
                                </label>
                                <label class="theme">Nip/Tuck</label>
                                    <input id="nip-tuck" type="radio" value="css/nip_tuck.css" name="theme">
                        </div>
                    </div>`;               

    /**
     * Listen for click on #modal-button and opens modal window
     */
    modalBtn.addEventListener('click', function openModal () {
        modal.style.display = 'block';
        game.ready = false;
    });
    /**
     * Listen for click on span.close-button and closes modal window
     */
    document.querySelector('.close-button').addEventListener('click', function closeModal () {
        modal.style.display = 'none';
        game.ready = true;
    });
    /**
     * Listen for click on #simple-modal and closes modal window
     */
    window.addEventListener('click', function clickOutside (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            game.ready = true;
        }
    });