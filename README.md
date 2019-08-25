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
    * The `app.js` file creates a new instance of the **Game** class, adds buttons to the page to toggle the music and sound on and off, declares an audio context for the background music, adds event listeners for the **Start Game** button, the onscreen keyboard buttons, the __keyup__ event, and the buttons within the modal window that toggles between different themes.
    * The `Game.js` file declares the **Game** class, which holds the main functionality for the __game__ (ie. starts the game, handles interaction (creates instances of the **Phrase** class), ends game, etc).
    * The `Phrase.js` file declares the **Phrase** class, which creates and holds the main functionality for the __phrases__ that are used within the game (ie. displays phrases on game board (as well as a hint and category for the phrases), adds line breaks for the phrases, etc).
    * The `BufferLoader.js` file declares a **BufferLoader** class, which requests and asynchronously decodes all of the sound fx in the game. 
    * The `audio.js` file declares an IEFE named audio that creates a sound object holding a property for each sound fx, creates instances of the **BufferLoader** class for each sound fx url, and returns a **playSound()** method that allows the sound fx to be called during the game play.
    * The `modal.js` file dynamically creates a modal window, populates it with buttons that trigger different themes for the game, and hides that window within a button labeled "THEME" for more advanced game settings.
    * The `phrase-list.js` declares a variable name __phrase__ that holds a list of eighty-four phrase objects, all of which contain a phrase property, one of seven category properties, and a hint property.

## Explanation of Techniques Used:
### Three classes (Game, Phrase, and BufferLoader) were created
1. The **Phrase** class:
    * The **constructor** receives three parameters: phrase, category, and hint, which are used to initialize matching properties.
        * **phrase** - The actual phrase the object is representing (converted to all lower case)
        * **category** - The category of the phrase the object is representing (converted to all lower case)
        * **hint** - A detail about the phrase the object is representing (converted to all lower case)
    * The phrase class has eight methods: 
        * **addLineBreak()** - Adds line break if phrase extends past the right side of the display.
        * **addPhraseToDisplay()** - Displays the phrase on the game board.
        * **createSection()** - Takes four parameters: three arrays && a string | Creates a div and inserts it into the DOM.
        * **addCategoryToDisplay()** - Displays category of phrase on game board.
        * **addHintToDisplay()** - Adds hint and get-hint button for phrase to game board, but hides the hint. It also adds an event listener to the get-hint button. If the player clicks the get-hint button, the callback function disables the listener on the get-hint button, calls the **showHint()** method, and calls the **removeLife()** method of the game object.
        * **showHint()** - Replaces the hint instructions with the actual hint
        * **checkLetter()** - Takes one parameter: a string && returns a boolean | Determines whether a specific letter is found within the phrase.
        * **showMatchedLetter()** - Takes one parameter: a string | Displays passed letter on screen after a match is found.
2. The **Game** class:
    * The **constructor** receives no parameters, but initializes the following properties:
        * **missed**: tracks the number of missed guesses by the player | Initial value is `0`
        * **phrases**: holds an array of all the phrase objects in the phrase variable contained in __phrase-list.js__
        * **activePhrase**: holds the phrase currently in play | Intialized as **null**
        * **ready**: a boolean that holds the state of the game | Intialized as **false**
    * The Game class has twelve methods: 
        * **createPhrases()** - Creates phrases for use in the game, and **returns** them to the phrases property.
        * **getRandomPhrase()** - Randomly retrieves one of the phrases stored in the phrases property and returns it.
        * **onScreenResize()** - Calls for the active phrase to be evaluated for line breaks so that the phrase remains responsive without a word being broken by the limits of the window's width. On smaller screens the **THEME** button is changed to a trigram.
        * **startGame()** - Hides the start screen overlay, calls the **getRandomPhrase()** method, sets the activePhrase with the chosen phrase, calls the following methods: **addPhraseToDisplay()**, **addCategoryToDisplay()**, **addHintToDisplay()**, **addInstructionsToDisplay()**, **onScreenResize()**; and sets the ready property to **true**.
        * **handleInteraction()** - Controls most of the game logic: Checks to see if the button clicked or key pressed by the player matches a letter in the activePhrase, then directs the game based on a correct or incorrect guess:
            * It disables the selected letter's onscreen keyboard button.
            * Plays the proper sound (if the sound is not turned off).
            * If the phrase does **not** include the guessed letter, the `wrong` CSS class is added to the selected letter's keyboard button and the **removeLife()** method is called.
            * If the phrase does include the guessed letter, the `chosen` CSS class is added to the selected letter's keyboard button, the **showMatchedLetter()** method is called, and then the **checkForWin()** method. If the phrase has been completely revealed, the __gameWon__ sound is played (if the sound is not turned off), the ready property is set to **false**, the **gameOver()** method is called, followed by the **reset()** method.
        * **checkForWin()** - Checks to see if the player has revealed all of the letters in the activePhrase, and returns a boolean.
        * **removeLife()** - Removes a life from the scoreboard, and increases the missed property by `1`. If the missed property is equal to four and the hint hasn't yet been revealed, the option to receive a hint is removed from the display. If the missed property is equal to five, the __gameLost__ sound is played (if the sound is not turned off), the ready property is set to **false**, the **gameOver()** method is called, followed by the **reset()** method.
        * **getRandomMessage()** - Takes an array of messages and **returns** one to be displayed once game ends.
        * **postGameOverMesssage()** - Takes two parameters: a messageType and an outcome, and posts a game over message to the display.
        * **gameOver()** - Displays the original start screen overlay, and depending on the outcome of the game, updates the overlay `h1` element with win or loss message, and replaces the overlay's `start` CSS class with the the `win` or `lose` CSS class. It also hides the **THEME** button, and stops the background music.
        * **addInstructionsToDisplay()** - Adds instructions to the display.
        * **reset()** - Resets the game to its initial state by: removing the activePhrase, enabling all the onscreen keyboard buttons, replacing the lost hearts with live hearts, replacing the `win` or `lose` classes from the overlay with the `start` class, and removing the instructions, category, and hint sections from the display.
3. The **BufferLoader** class:
    * The **constructor** receives three parameters: context, urlList, and callback. It initializes the following properties.
        * **context**: holds the context for the audio
        * **urlList** holds a list of the absolute paths for the sound fx
        * **callback** is the function that runs after the sounds have been decoded
        * **bufferList** holds all of the decoded sound fx
    * The **BufferLoader** class has two methods:
        * **loadBuffer** - Takes two parameters: a url and an index, and Makes an __XHR__ request for a audio file, which it decodes for gameplay.
        * **load** - Calls the **loadBuffer()** method on each path in **urlList**.
4. ### Features
    1. I noticed early on in the process of programming this game that if a phrase extended past the width of the browser window I chanced having a word being split to ensure the phrase remained on the screen. The problem with this was that because all of the letters are hidden, it caused a single word in the phrase to appear as two different words. I wanted to change this, so I first added a **white-space** rule to all lists and list items (this way the phrase would not automatically wrap). Next I added an algorithm (**addLineBreak()**) which creates an array for all of the `li`s with a class of `space`—called __spaces__—within the phrase. It checks if any `li`s fall outside of the window object's `innerWidth`, and if so, it sets that `li` as a reference. It then adds a class of `break` to the previous `li`—to the reference—in the spaces array. If the `li` prior to the reference already had the `break` class added to it (meaning a word in the phrase is by itself longer than the width of the browser), then the `break` class is added to the reference. Finally, the last word is checked to determine if it extends past the window object's `innerWidth`, and if so, that word is broken to its own line. The algorithm was then added to the original addition of the phrase to the display, and also to a resize listener attached the window object so that the phrase remains responsive.
    2. Before commencing programming for the game, I knew I wanted to add audio as well as a hint and category option. The category option was borne from __Wheel of Fortune__, and the hint option was my own concept (though not wholly original). Because I did not wish to alter the **index.html** in any way aside from linking stylesheets and scripts, I dynamically created sections and inserted/appended them to the DOM. The **createSection()**, **addCategoryToDisplay()**, and **addHintToDisplay()** methods of the **Phrase** class were used to add both the category sections and hint sections to the gameplay area. A **createAudioToggles()** function in the `app.js` file works in a similar way to add the audio buttons to the gameplay area.
    3. The differing THEMES was a fairly late addition to the project. The modal window was originally envisioned as a place to hold the audio buttons, but it was determined that forcing the player to click a button before having an option to toggle the audio off would offer a worse UX than simply having the buttons visible on the game board. As such those were moved, and I decided to use the modal window to house the various theme triggers. In `app.js` an event listener has been added to each of those buttons, so that if/when one is clicked, the `link` element in the `head` of the DOM with an `id` of `theme` is selected, and the value of its `href` attribute is replaced with the value of the `event.target`'s `id` (inserted within the `css/` and `.css` strings). Prior to this, the theme `radio` buttons are added to the modal window—in `modal.js`—using a function called **addPageThemes()** which takes one parameter: the theme name and uses it as the value of the button's `id` and its `textContent`.
    4. Just for fun, I wanted the game over message to change if the player decided to play multiple games (especially since I created 75+ phrases). As such I decided to create two arrays: **winningMessages** and **losingMessages**. Each array holds five messages, and a **getRandomMessage()** method selects one when the game ends and the **postGameOverMessage()** method is called, and displays it to the screen. The **Math** object is used along with its **random()** and **floor()** methods to randomly select a phrase which is **returned** to the `game-over-message`'s `textContent`.
    5. Finally, I knew early on that I wanted to try to add an audio component to the game, as I always felt that audio plays an important role in all of my favorite games. It also felt necessary if I wanted to program a game that felt professional. I did quite a bit of research, and using a book by **Boris Smus** entitled the [__Web Audio API__](https://webaudioapi.com/book/Web_Audio_API_Boris_Smus.pdf), I wrote the **BufferLoader** class as well as the `audio.js` file to implement audio into the gameplay. After having issues with **CORS** (Cross Origin Resource Sharing) not allowing my **XHR** request to pass, I setup hosting for my audio files through [**github**](github.com), so that the **XHR** requests would pass.
5. ### Keyboard Functionality and CSS Additions (FOR EXCEEDS)
    1. As mentioned earlier, keyboard functionality has been added to the game so that when the `keyup` event is triggered on the DOM, the **handleInteraction()** method of the **Game** class is called.
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