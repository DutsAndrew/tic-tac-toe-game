// Player Variables for Game
let playerOne;
let playerTwo;

// Creates and stores players
const playerFactory = (name, wins, loses, symbol, tiles) => {
    tiles = [];
    const playerInfo = () => console.log(`Player: ${name}, Wins: ${wins}, Loses: ${loses}, Symbol: ${symbol}, Tiles: ${tiles}`);
    return { 
        name: name,
        tiles: tiles,
        playerInfo,
    };
};

// Handles all events and functions that involve starting or reseting the game
const gameForm = (function() {
    // functions to open and close the form
    const gameForm = document.querySelector('#game-start-form');
    const startGameButton = document.querySelector('#start-game');
    const startGameForm = document.querySelector('#game-start-container');
    const closeGameForm = document.querySelector('#close-game-form');

    startGameButton.addEventListener('click', _openForm);
    closeGameForm.addEventListener('click', _closeForm);

    let gameFormOpen = false;

    function _openForm() {
        if (gameFormOpen === false) {
            console.log("start game has been clicked");
            startGameForm.style.display = "flex";
            gameFormOpen = true;
        }
    }
    function _closeForm() {
        if (gameFormOpen === true) {
            console.log("Close game form button has been clicked");
            startGameForm.style.display = "none";
            gameFormOpen = false;
        }
    }

    // Controls for when Players are being selected
    const playerTwoContainer = document.querySelector('#player-two-input-container');

    let gameMode = 0;

    const playerVsComputer = document.querySelector('#player-vs-computer').onclick = function() {
        playerTwoContainer.style.display = "none";
        gameMode = 1;
        console.log(`Game Mode: ${gameMode} - Player VS Computer was selected`);
    }
    const playerVsPlayer = document.querySelector('#player-vs-player').onclick = function() {
        gameMode = 2;
        console.log(`Game Mode: ${gameMode} - Player VS Player was selected`);
        if (playerTwoContainer.style.display = "none") {
            playerTwoContainer.style.display = "flex";
        }
    }

    // Assigns symbol choices to players in the game
    let playerOneSymbolChoice = 0;
    let playerTwoSymbolChoice = 0;

    const playerChoiceSword = document.querySelector('#symbol-sword').onclick = function() {
        playerOneSymbolChoice = 1;
        playerTwoSymbolChoice = 2;
        console.log("Player One, has chosen 'Sword', and Player Two has chosen 'Shield'");
    }
    const playerChoiceShield = document.querySelector('#symbol-shield').onclick = function() {
        playerOneSymbolChoice = 2;
        playerTwoSymbolChoice = 1;
        console.log("Player One, has chosen 'Shield', and Player Two has chosen 'Sword'");
    }

    // Handles setting up game when submitting form
    const submitGameSettings = document.querySelector('#submit-game-settings');
    const displayNamePlayerOne = document.querySelector('#player-one-name-display');
    const displayNamePlayerTwo = document.querySelector('#player-two-name-display');
    const displaySymbolPlayerOne = document.querySelector('#player-one-symbol-display');
    const displaySymbolPlayerTwo = document.querySelector('#player-two-symbol-display');
    
    submitGameSettings.addEventListener('click', _submitSettings);

    function _submitSettings() {

        let playerOneName = document.querySelector('#player-one-name').value;
        let playerTwoName = document.querySelector('#player-two-name').value;

        if (gameMode == 0) {
            gameForm.reset();
            alert("You cannot start a game without setting a game mode, please select: 'Player VS Player' or 'Player VS Computer'");
        } else if(gameMode == 1 && playerOneName == "") {
            gameForm.reset();
            alert("Player 1 does not have a name entered, please try again");
        } else if (gameMode == 2 && playerOneName == "" && playerTwoName == "") {
            gameForm.reset();
            alert("Either Player 1 or Player 2 do not have a name, please fix this to start the game");
        } else if (gameMode == 1 && playerOneSymbolChoice == 1 && playerOneName != "") {
            displayNamePlayerOne.textContent = `${playerOneName}`;
            displayNamePlayerTwo.textContent = "Computer";
            displaySymbolPlayerOne.textContent = "Sword 🗡️";
            displaySymbolPlayerTwo.textContent = "Shield 🛡️";
            displaySymbolPlayerOne.classList.add('player-name-text');
            displaySymbolPlayerTwo.classList.add('player-name-text');
            playerOne = playerFactory(`${playerOneName}`, 0, 0, 'Sword 🗡️');
            playerTwo = playerFactory('Computer', 0, 0, 'Shield 🛡️');
            gameForm.reset();
            _closeForm();
            return {playerOne, playerTwo}
        } else if (playerOneSymbolChoice == 2 && playerTwoSymbolChoice == 1 && gameMode == 1 && playerOneName != "") {
            displaySymbolPlayerOne.textContent = "Shield 🛡️";
            displaySymbolPlayerTwo.textContent = "Sword 🗡️";
            displaySymbolPlayerOne.classList.add('player-name-text');
            displaySymbolPlayerTwo.classList.add('player-name-text');
            playerOne = playerFactory(`${playerOneName}`, 0, 0, 'Shield 🛡️');
            playerTwo = playerFactory('Computer', 0, 0, 'Sword 🗡️');
            gameForm.reset();
            _closeForm();
            return {playerOne, playerTwo}
        } else if (gameMode == 2 && playerOneSymbolChoice == 1 && playerTwoSymbolChoice == 2 && playerOneName != "" && playerTwoName != "") {
            displayNamePlayerOne.textContent = `${playerOneName}`;
            displayNamePlayerTwo.textContent = `${playerTwoName}`;
            displaySymbolPlayerOne.textContent = "Sword 🗡️";
            displaySymbolPlayerTwo.textContent = "Shield 🛡️";
            displaySymbolPlayerOne.classList.add('player-name-text');
            displaySymbolPlayerTwo.classList.add('player-name-text');
            playerOne = playerFactory(`${playerOneName}`, 0, 0, 'Sword 🗡️');
            playerTwo = playerFactory(`${playerTwoName}`, 0, 0, 'Shield 🛡️');
            gameForm.reset();
            _closeForm();
            return {playerOne, playerTwo}
        } else if (gameMode == 2 && playerOneSymbolChoice == 2 && playerTwoSymbolChoice == 1 && gameMode == 2 && playerOneName != "" && playerTwoName !== "") {
            displayNamePlayerOne.textContent = `${playerOneName}`;
            displayNamePlayerTwo.textContent = `${playerTwoName}`;
            displaySymbolPlayerOne.textContent = "Shield 🛡️";
            displaySymbolPlayerTwo.textContent = "Sword 🗡️";
            displaySymbolPlayerOne.classList.add('player-name-text');
            displaySymbolPlayerTwo.classList.add('player-name-text');
            playerOne = playerFactory(`${playerOneName}`, 0, 0, 'Shield 🛡️');
            playerTwo = playerFactory(`${playerTwoName}`, 0, 0, 'Sword 🗡️');
            gameForm.reset();
            _closeForm();
            return {playerOne, playerTwo}
        } else {
            location.reload();
        } 
        return {
            playerOne,
            playerTwo,
        }
    }
})();

const _playerTurn = (function() {

    const playerOneDisplay = document.querySelector('#player-one');
    const playerTwoDisplay = document.querySelector('#player-two');

    const submitGameSettings = document.querySelector('#submit-game-settings');
    submitGameSettings.addEventListener('click', whosTurnIsIt);

    let playerTurn = 0;

    function whosTurnIsIt() {
        if (playerTurn == 0 || playerTurn == 2) {

            playerTurn = 1;

            const turnText = document.createElement("p");
            turnText.classList.add('turn-text');
            turnText.textContent = "It is Player One's Turn";

            playerOneDisplay.classList.add('shakeItAnimation');

            playerOneDisplay.appendChild(turnText);
        } else if (playerTurn == 1) {

            playerTurn = 2;

            const turnText = document.createElement("p");
            turnText.classList.add('turn-text');
            turnText.textContent = "It is Player One's Turn";

            playerTwoDisplay.classList.add('shakeItAnimation');

            playerTwoDisplay.appendChild(turnText);
        }
    }
})();

// Handles all events and functions for reseting the game
const _resetGame = (function() {
    'use strict';

    const resetGameButton = document.querySelector('#reset-game');
    resetGameButton.addEventListener('click', reloadPage);

    function reloadPage() {
        location.reload();
    }
})();

// Handles all events and functions that involve the gameboard
const _gameBoard = (function() {
    'use strict';


})();

// Finds the selected player symbol, declares a variable, and returns it for use
function findGameSymbol() {
    let finder = document.getElementsByName('symbol-choice-selector');

    for (i = 0; i < finder.length; i++) {
        if (finder[i].checked) {
            playerOneSymbol = i;
            return playerOneSymbol;
        }
    }
}