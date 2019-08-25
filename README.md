# Techdegree Project 4 | OOP GAME SHOW APP

a COURSE BY TREEHOUSE

JS CODE by Brandon White | white.brandonsean@gmail.com

## Objective:
The objective of this project was to build an interactive game app called __Phrase Hunter__ using object oriented programming principles.

## Summary of Results:
* Seven script files have been created to hold all the functionality for this game && three classes (Game, Phrase, and BufferLoader) have been declared.
    * The `app.js` file creates a new instance of the **Game** class, adds buttons to the page to toggle the music and sound on and off, declares an audio context for the background music, adds event listeners for the **Start Game** button, the onscreen keyboard buttons, the __keyup__ event, and the buttons within the modal window that toggles between different themes.
    * The `Game.js` file declares that **Game** class, which hold the main functionality for the game (ie. starts the game, handles interaction (creates instances of the **Phrase** class), ends game, etc).
    * The `Phrase.js` file declares the **Phrase** class, which creates and holds the main functionality for the phrases that are used within the game (ie. displays phrases on game board (as well as a hint and category for the phrases), adds line breaks for the phrases, etc).
    * The `BufferLoader.js` file declares a **BufferLoader** class, which requests and asynchronously decodes all of the sound fx in the game. 
    * The `audio.js` file declares an IEFE named audio that creates a sound object holding a property for each sound fx, creates instances of the **BufferLoader** class for each sound fx url, and returns a **playSound()** method that allows the sound fx to be called in the game.
    * The `modal.js` file dynamically creates a modal window, populates it with buttons that trigger different themes for the game, and hides that window within a button labeled "THEME" for more advanced game settings.
    * The `phrase-list.js` declares a variable name __phrase__ that holds a list of eighty-four phrase objects, all of which contain a phrase property, one of seven category properties, and a hint property.

## Explanation of Techniques Used:
1. The **Phrase** class:
    * The **constructor** receives three parameters: phrase, category, and hint, which are used to initialize matching properties.
        * The phrase parameter is the actual phrase the object is representing (converted to all lower case)
        * The category is the category of the phrase the object is representing (converted to all lower case)
        * The hint is a detail about the phrase the object is representing (converted to all lower case)
    * The phrase class has eight methods: 
        * **addLineBreak()** - Adds line break if phrase extends past the right side of the display.
        * **addPhraseToDisplay()** - Displays the phrase on the game board.
        * **createSection()** - Takes four parameters: three arrays && a string | Creates a div and inserts it into the DOM.
        * **addCategoryToDisplay()** - Displays category of phrase on game board.
        * **addHintToDisplay()** - Adds hint for phrase to game board, but hides it.
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

*** 

All sound fx and music were located at [freesound.org](freesound.org)
* [keypress](https://freesound.org/people/thegreatrazz/sounds/332459/) sound from **thegreatrazz**
* [correctLetter](https://freesound.org/people/Bertrof/sounds/351564/) && [wrongLetter](https://freesound.org/people/Bertrof/sounds/351563/) sounds from **Bertrof**
* [gameWon](https://freesound.org/people/Mativve/sounds/391539/) && [gameLost](https://freesound.org/people/Mativve/sounds/391536/) sounds from **Mativve**
* [background](https://freesound.org/people/xsgianni/sounds/388079/) music from **xsgianni**
