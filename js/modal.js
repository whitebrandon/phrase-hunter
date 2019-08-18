
/******************************************
 *************** VARIABLES ****************
 ******************************************/

'use strict';

    const modal = document.createElement('div');
    const modalBtn = document.createElement('button');
    const mainContainer = document.querySelector('.main-container');

    mainContainer.insertBefore(modal, banner);
    modalBtn.setAttribute('id', 'modal-button');
    modalBtn.innerHTML = 'AUDIO &#x2699;';
    modalBtn.className = 'button';
    banner.appendChild(modalBtn);
    modal.setAttribute('id', 'simple-modal');
    modal.className = 'modal';
    modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-button">&otimes;</span>
                        <h2>Audio Settings</h2>
                        <div class="modal-body">
                            <label class="switch">&#127925; Music
                                <input type="checkbox" checked>
                                <span class="slider">ON</span>
                            </label>
                            <label class="switch">&#128266; Sound
                                <input type="checkbox" checked>
                                <span class="slider">ON</span>
                            </label>
                        </div>
                    </div>`;

    /**
     * Adds functionality to toggle switches in Audio Setting modal window
     */
    document.querySelectorAll('.switch input').forEach(input => {
        input.addEventListener('click', function toggleSwith (e) {
            if (e.target.checked === true) {
                e.target.nextElementSibling.innerHTML = "ON";
                e.target.nextElementSibling.style.textAlign = "left";
            } else {
                e.target.nextElementSibling.innerHTML = "OFF";
                e.target.nextElementSibling.style.textAlign = "right";
            }
        });
    });

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