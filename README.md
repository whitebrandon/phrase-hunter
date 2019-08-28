# Techdegree Project 4 | OOP GAME SHOW APP

a COURSE BY TREEHOUSE

JS CODE by Brandon White | white.brandonsean@gmail.com

## Objective:
The objective of this project was to build an interactive game app called __Phrase Hunter__ using object oriented programming principles.

## Summary of Results:
* __Phrase Hunter__ has three scenes: The "Start" menu, the "Game", and the "Game Over" scene. 
    * The game begins by clicking the "Start Game" button, then the "Start" menu is hidden, while a list of hidden letters is added to the display. 
    * The title "Phrase Hunter" appears at the top of the display, with the instructions "win by guessing the phrase before losing all of your hearts" apearring underneath. 
    * To the top-right corner is a button labeled "THEME". Clicking on the button opens a modal window containing nine more buttons, which allow the player to change the theme (background image and color scheme) for the display. 
        * The THEME modal window can be closed by either clicking the close button, or by clicking outside of the modal content box. 
    * The hidden phrase is responsive and adjusts with the size of the player's browser window. 
    * The category section describes the category of the phrase. 
        * The seven categories are: fictional characters, movie titles, song ♫ lyrics, famous authors, popular idioms, philisophical quotes, and before and after. 
    * Beneath the category is an onscreen qwerty keyboard. The player can guess the phrase by either clicking the buttons on the onscreen keyboard or by pressing the keys on their devices keyboard. 
    * A toggle section includes two buttons labeled "Music" and "Sound". These buttons toggle the music and sound for the game on and off. 
    * The hint section contains a paragraph explaining the cost of a hint, and a button which displays a hint to the players (provided the player has not already accumulated four misses). Given that the hint costs a single heart, the option to buy a hint is removed once a player accumulates four misses.
        * The player may only purchase one hint per game.
    * The scoreboard consists of five blue hearts to start the game. As the player guesses incorrectly or purchases a hint, one blue heart is replaced with a dimmed/lost heart. 
    * Once the game is won or lost (the phrase either revealed or all hearts lost) a "Game Over" screen is displayed and one of five random messages (ten total) is printed to the screen, depending upon the outcome.
* Seven script files—including three classes—have been created to hold all the functionality for this game.

## Explanation of Techniques Used:
### Three classes (Game, Phrase, and BufferLoader) were created
1. The **Phrase** class:
    * The **constructor** receives three parameters: phrase, category, and hint, which are used to initialize matching properties.
        * **phrase** - The actual phrase the object is representing (converted to all lower case)
        * **category** - The category of the phrase the object is representing (converted to all lower case)
        * **hint** - A detail about the phrase the object is representing (converted to all lower case)
2. The **Game** class:
    * The **constructor** receives no parameters, but initializes the following properties:
        * **missed**: tracks the number of missed guesses by the player | Initial value is `0`
        * **phrases**: holds an array of all the phrase objects in the phrase variable contained in __phrase-list.js__
        * **activePhrase**: holds the phrase currently in play | Intialized as **null**
        * **ready**: a boolean that holds the state of the game | Intialized as **false**
3. The **BufferLoader** class:
    * The **constructor** receives three parameters: context, urlList, and callback. It initializes the following properties.
        * **context**: holds the context for the audio
        * **urlList** holds a list of the absolute paths for the sound fx
        * **callback** is the function that runs after the sounds have been decoded
        * **bufferList** holds all of the decoded sound fx
4. ### Features
    1. I noticed early on in the process of programming this game that if a phrase extended past the width of the browser window I chanced having a word being split to ensure the phrase remained on the screen. The problem with this was that because all of the letters are hidden, it caused a single word in the phrase to appear as two different words. I wanted to change this, so I first added a **white-space** rule to all lists and list items (this way the phrase would not automatically wrap). Next I created an algorithm (**addLineBreak()**) which dynamically adds line breaks to the phrase (allowing the phrase in play to be responsive to the screensize).
    2. Before commencing programming for the game, I knew I wanted to add audio as well as a hint and category option. The category option was borne from __Wheel of Fortune__, and the hint option was my own concept (though not wholly original). Because I did not wish to alter the **index.html** in any way aside from linking stylesheets and scripts, I dynamically created sections and inserted/appended them to the DOM.
    3. The differing THEMES was a fairly late addition to the project. The modal window was originally envisioned as a place to hold the audio buttons, but it was determined that forcing the player to click a button before having an option to toggle the audio off would offer a worse UX than simply having the buttons visible on the game board. As such those were moved, and I decided to use the modal window to house the various theme triggers. In `app.js` an event listener has been added to each of those buttons, so that if/when one is clicked, the `link` element in the `head` of the DOM with an `id` of `theme` is selected, and the value of its `href` attribute is replaced with the value of the `event.target`'s `id` (inserted within the `css/` and `.css` strings).
    4. Just for fun, I wanted the game over message to change if the player decided to play multiple games (especially since I created 75+ phrases). As such I decided to create two arrays: **winningMessages** and **losingMessages**. Each array holds five messages, and depending on the outcome of each game one of these messages is randomly selected and printed to the game-over screen.
    5. Finally, I knew early on that I wanted to try to add an audio component to the game, as I always felt that audio plays an important role in all of my favorite games. It also felt necessary if I wanted to program a game that felt professional. I did quite a bit of research, and using a book by **Boris Smus** entitled the [__Web Audio API__](https://webaudioapi.com/book/Web_Audio_API_Boris_Smus.pdf), I wrote the **BufferLoader** class as well as the `audio.js` file to implement audio into the gameplay. After having issues with **CORS** (Cross Origin Resource Sharing) not allowing my **XHR** request to pass, I setup hosting for my audio files through [**github**](github.com), so that the **XHR** requests would pass.
5. ### Keyboard Functionality and CSS Additions (FOR EXCEEDS)
    1. Keyboard functionality has been added to the game so that when the `keyup` event is triggered on the DOM, the **handleInteraction()** method of the **Game** class is called.
    2. There are a few ways in which CSS additions have been made (all of which are on their own stylesheets, so that there is a separation between my styles and those included within the assets given me).
        * The primary CSS additions are within the nine themes available. But the designs of these themes are still a work in progress.
        * Also, there are styles specifically for the modal window and its matching button, and the modal content.
        * Finally, within `more-styles.css` rules have been added to allow for certainly functionality. As mentioned prior, a **white-space** rule has been added to the lists and list items. A **user-select** rule of `none` has been added to the `letter` class so that the player cannot cheat the game by highlighting the hidden phrase/selecting the `transparent` text content of each letter. Styles have been added for all of the dynamically appended/inserted elements (ie. category paragraphs, audio buttons, etc), and **@media** queries have been added to keep the layout of the page responsive after the addition of my features. At certain screen heights and widths the **banner** section of the game area becomes a grid so that the title, insctructions, and modal-button maintain a relatively pleasant relation to one another within the layout of the page.
*** 

All sound fx and music were located at [freesound.org](freesound.org)
* [keypress](https://freesound.org/people/thegreatrazz/sounds/332459/) sound from **thegreatrazz**
* [correctLetter](https://freesound.org/people/Bertrof/sounds/351564/) && [wrongLetter](https://freesound.org/people/Bertrof/sounds/351563/) sounds from **Bertrof**
* [gameWon](https://freesound.org/people/Mativve/sounds/391539/) && [gameLost](https://freesound.org/people/Mativve/sounds/391536/) sounds from **Mativve**
* [background](https://freesound.org/people/xsgianni/sounds/388079/) music from **xsgianni**