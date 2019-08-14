
const simpleModal = document.createElement('div');
simpleModal.className = "simpleModal";
const modalContent = document.createElement('div');
modalContent.className = "modal-content";
const closeSpan = document.createElement('span');
closeSpan.className = "closeBtn";
closeSpan.textContent = "&otimes;"
const modalH2 = document.createElement('h2');
modalH2.textContent = "Music/Sound"
const modalHeader = document.createElement('div');
modalHeader.className = "modal-header";
const modalBody = document.createElement('div');
modalBody.className = "modal-body";
const modalList = document.createElement('ul');
const modalLI_1 = document.createElement('li');
modalLI_1.textContent = "Music";
const modalLI_2 = document.createElement('li');
modalLI_2.textContent = "Sound";

modalList.appendChild(modalLI_1);
modalList.appendChild(modalLI_2);
modalBody.appendChild(modalList);

modalHeader.appendChild(closeSpan);
modalHeader.appendChild(modalH2);
modalContent.appendChild(modalHeader);

simpleModal.appendChild(modalContent);
simpleModal.appendChild(modalBody);

document.querySelector('.main-container').insertBefore(simpleModal, document.getElementById('banner'));

/**
 * Get modal element
 */
const modal = document.getElementById('simpleModal');
/**
 * Get open modal button
 */
const modalBtn = document.getElementById('modalBtn');
/**
 * Get close button
 */
const closeBtn = document.querySelector('.closeBtn');

/**
 * Function to open modal
 */
const openModal = () => {
    modal.style.display = 'block';
}
/**
 * Function to close modal
 */
const closeModal = () => {
    modal.style.display = 'none';
}
/**
 * Function to close modal if outside click
 */
const clickOutside = e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

/**
 * Listen for open click
 */
modalBtn.addEventListener('click', openModal);
/**
 * Listen for close click
 */
closeBtn.addEventListener('click', closeModal);
/**
 * Listen for Outside click
 */
window.addEventListener('click', clickOutside);
