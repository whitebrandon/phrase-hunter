/******************************************
Treehouse Techdegree:
FSJS project 4 - OOP Game App
Name: Brandon White
Date of Last Modification: 06/07/2020
modal.js
******************************************/

'use strict';

    /******************************************
     *************** VARIABLES ****************
     ******************************************/

    const mainContainer = document.querySelector('.main-container');
    const modal = {modal: "", modalBtn: "", modalContent: "", span: "", modalTitle: "", modalBody: ""}
    const elements = ['div', 'button', 'div', 'span', 'h2', 'div'];
    const themeNames = ["light", "dark", "superhero", "movies", "music", "writing", "emoji", "philosophy", "life_cycle"];
    
    /**
     * Appends child elements to parent element
     * @param {Element} parent Parent node
     * @param  {...any} children An array of child elements to be appended
     */
    const append = (parent, ...children) => children.forEach(child => parent.appendChild(child));
    /**
     * IIFE | Creates elements using modal Object and tags from elements Array
     */
    (() => {
        let i = 0;
        for (let prop in modal) {
        modal[prop] = document.createElement(elements[i++]);
        }
    })();
    /**
     * Adds radio buttons to modal window
     * @param {string} themeName Name of page theme linked to button
     */
    const addPageThemes = (themeName) => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        label.className = "theme";
        themeName !== "life_cycle" ? label.textContent = themeName.toLowerCase() : label.textContent = "life cycle";
        append(label, radio);
        const attributes = [{name: "id", value: themeName}, {name: "type", value: "radio"}, {name: "name", value: "theme"}];
        attributes.forEach(attribute => radio.setAttribute(attribute.name, attribute.value));
        append(modal.modalBody, label);
    }
    /**
     * Sets the class and innerHTML for an element
     * @param {Element} element The element to be altered
     * @param {string} className The class to be added
     * @param {string} innerHTML The html text node to be added
     */
    const addClassAndInner = (element, className, innerHTML) => {
        element['className'] = className;
        element['innerHTML'] = innerHTML;
    }

    mainContainer.insertBefore(modal.modal, banner);
    append(banner, modal.modalBtn);
    append(modal.modal, modal.modalContent);
    append(modal.modalContent, modal.span, modal.modalTitle, modal.modalBody); 
    modal.modalBtn.setAttribute('id', 'modal-button');
    addClassAndInner(modal.modalBtn, "button", "THEMES");
    modal.modal.setAttribute('id', 'simple-modal');
    modal.modal.className = 'modal';
    modal.modalContent.className = 'modal-content';
    addClassAndInner(modal.span, "close-button", "&otimes;");
    modal.modalBody.className = 'modal-body';
    modal.modalTitle.textContent = "Themes";
    
    for (let i = 0, n = themeNames.length; i < n; i++) {
        addPageThemes(themeNames[i]);
    }
    
    /**
     * Listen for click on #modal-button and opens modal window
     */
    modal.modalBtn.addEventListener('click', function openModal () {
        modal.modal.style.display = 'block';
        game.ready = false;
    });
    /**
     * Listen for click on span.close-button and closes modal window
     */
    document.querySelector('.close-button').addEventListener('click', function closeModal () {
        modal.modal.style.display = 'none';
        game.ready = true;
    });
    /**
     * Listen for click on #simple-modal and closes modal window
     */
    window.addEventListener('click', function clickOutside (e) {
        if (e.target === modal.modal) {
            modal.modal.style.display = 'none';
            game.ready = true;
        }
    });