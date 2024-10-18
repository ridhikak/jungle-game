/*
 * Name: Ridhi Kakar
 * Date: October 17, 2024
 * Section: CSE 154 AF
 *
 * This is the JS to implement the UI for my Create your own Adventure game (Welcome
 * to the Jungle). It has different paths for each choice the user makes.
 */
"use strict";

/**
 * Initializes the application on window load.
 */
(function() {
  window.addEventListener("load", init);

  /**
   * Initializes event listeners.
   */
  function init() {
    let begin = document.querySelector('.begin');
    begin.addEventListener("click", start);
  }

  /**
   * Starts the game by setting up the initial scene.
   */
  function start() {
    let whole = document.querySelector('.whole');
    let intro = document.querySelector('#intro');

    intro.remove();
    whole.classList.add('jungle');

    addButton("Wow we've been walking for a while, I wonder what's next to come!", 'leftOrRight');
  }

  /**
   * Executes the function based on the provided function name.
   * @param {string} functionName - The name of the function to execute.
   */
  function doAnything(functionName) {
    if (functionName === 'leftOrRight') {
      leftOrRight();
    } else if (functionName === 'left') {
      left();
    } else if (functionName === 'right') {
      right();
    } else if (functionName === 'turn') {
      turn();
    } else if (functionName === 'hide') {
      hide();
    } else if (functionName === 'swim') {
      swim();
    } else if (functionName === 'rocks') {
      rocks();
    } else if (functionName === 'step') {
      step();
    } else if (functionName === 'water') {
      water();
    } else if (functionName === 'climb') {
      climb();
    } else if (functionName === 'torch') {
      torch();
    } else if (functionName === 'run') {
      run();
    } else if (functionName === 'fight') {
      fight();
    } else if (functionName === 'hole') {
      hole();
    } else if (functionName === 'stepOrWater') {
      stepOrWater();
    } else if (functionName === 'dead') {
      dead();
    }
  }

  /**
   * Handles the left or right decision.
   */
  function leftOrRight() {
    let whole = document.querySelector('.whole');
    whole.classList.add('split-paths');

    qs('Ah a fork in the road...well the map says go left.');
    addButton('Go Left', 'left');
    addButton('Go Right', 'right');
  }

  /**
   * Handles the left path decision.
   */
  function left() {
    let whole = document.querySelector('.whole');
    whole.classList.remove('split-paths');

    qs('Hmmm I hear some weird noises, should we find out what it is or hide?');

    addButton('Turn Around', 'turn');
    addButton('Hide in a Bush', 'hide');
  }

  /**
   * Handles the turn action.
   */
  function turn() {
    let whole = document.querySelector('.whole');
    whole.classList.add('beast');

    qs('AHHH its a beast! What do we do ???');

    addButton('RUN', 'run');
    addButton('FIGHT', 'fight');
  }

  /**
   * Handles the run action.
   */
  function run() {
    dead('Really, you ran instead of fighting...yeah thats why you tripped and died.');
  }

  /**
   * Handles the fight action.
   */
  function fight() {
    let whole = document.querySelector('.whole');
    whole.classList.add('win-king');
    victory('WOAH ALL THE ANIMALS HAVE BEEN WANTING THAT BEAST DEAD. YOURE KING OF THE JUNGLE!!!');
  }

  /**
   * Handles the hide action.
   */
  function hide() {
    let whole = document.querySelector('.whole');
    whole.classList.add('fr-bush');
    removeGameP();

    addButton('Woah that was a close, I think I saw a beast--AHHH', 'hole');
  }

  /**
   * Handles the hole action.
   */
  function hole() {
    let whole = document.querySelector('.whole');
    whole.classList.add('black');

    createText("Oh gosh, I think we fell in a hole.");
    addButton('Climb Out', 'climb');
    addButton('Light a Torch', 'torch');
  }

  /**
   * Handles the climb action.
   */
  function climb() {
    dead("Cause of Death: A Ladder. How clumsy can you be.");
  }

  /**
   * Handles the torch action.
   */
  function torch() {
    let whole = document.querySelector('.whole');
    whole.classList.add('treasure');
    whole.classList.remove('black');

    victory("OMFG THE TREASURE");
  }

  /**
   * Handles the right path decision.
   */
  function right() {
    let whole = document.querySelector('.whole');
    whole.classList.add('lake');

    qs("Ugh a lake. Should we jump the rocks or just swim it?");

    addButton('Swim It', 'swim');
    addButton('Jump the Rocks', 'rocks');
  }

  /**
   * Handles the swim action.
   */
  function swim() {
    let whole = document.querySelector('.whole');
    whole.classList.add('underwater');

    removeGameP();
    addButton('*glug* *glug *glug*', 'stepOrWater');
  }

  /**
   * Handles the decision between stepping on spiders or going back in the water.
   */
  function stepOrWater() {
    let whole = document.querySelector('.whole');
    whole.classList.add('spiders');

    createText("AHHHHH BIG SPIDERS! What do we do???");
    addButton('STEP ON EM', 'step');
    addButton('BACK IN THE WATER WE GO', 'water');
  }

  /**
   * Handles stepping on something.
   */
  function step() {
    let whole = document.querySelector('.whole');
    whole.classList.add('trap');

    addButton('Uh Oh', dead("I always forget about the booby traps."));
  }

  function interlude() {

  }

  /**
   * Handles the water action.
   */
  function water() {
    dead("Idk how you drowned my guy...that's just embarrasing");
  }

  /**
   * Handles the rocks action.
   */
  function rocks() {
    dead("Imagine being so big you break stepping stones.");
  }

  /**
   * Adds a button with the specified text and function name.
   * @param {string} newText - The text displayed on the button.
   * @param {string} functionName - The function to call when the button is clicked.
   */
  function addButton(newText, functionName) {
    let buttons = document.querySelector('.buttons');
    let btn = document.createElement('button');
    btn.textContent = newText;
    btn.classList.add('newButtonClass');
    buttons.appendChild(btn);

    btn.addEventListener('click', function() {
      let allBtns = document.querySelectorAll('button');
      for (let i = 0; i < allBtns.length; i++) {
        allBtns[i].remove();
      }
      doAnything(functionName);
    });
  }

  /**
   * Creates a text element with the specified text.
   * @param {string} newText - The text to display.
   */
  function createText(newText) {
    let game = document.querySelector('.game');
    let otherText = document.createElement('p');
    otherText.textContent = newText;
    otherText.classList.add('newTextClass');
    game.appendChild(otherText);
  }

  /**
   * Handles the dead state and displays the death message.
   * @param {string} newText - The death message to display.
   */
  function dead(newText) {
    let whole = document.querySelector('.whole');
    whole.classList.add('fr-dead');

    removeGameP();

    let deadClass = document.querySelector('.dead');
    let letters = deadClass.querySelector('h2');
    letters.textContent = 'DEAD';
    letters.classList.add('dead-letters');

    let caption = deadClass.querySelector('p');
    caption.textContent = newText;
    caption.classList.add('dead-caption');
  }

  /**
   * Updates the text displayed in the game.
   * @param {string} newText - The new text to display.
   */
  function qs(newText) {
    let game = document.querySelector('.game');
    let pText = game.querySelector('p');
    pText.textContent = newText;
    pText.classList.add('newTextClass');
  }

  /**
   * Handles the victory state and displays the victory message.
   * @param {string} newText - The victory message to display.
   */
  function victory(newText) {
    removeGameP();
    let victoryP = document.querySelector('.victory');
    let pText = victoryP.querySelector('p');
    pText.textContent = newText;
    pText.classList.add('victory');
  }

  /**
   * Removes the paragraph element from the game display.
   */
  function removeGameP() {
    let game = document.querySelector('.game');
    let gameP = game.querySelector('p');
    gameP.remove();
  }

  /*
  All Photo Credit: Microsoft Copilot
  */
})();
