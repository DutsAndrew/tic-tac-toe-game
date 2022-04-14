// Player Variables for Game
let playerOne;
let playerTwo;
let playerOneSymbolChoice = 0;
let playerTwoSymbolChoice = 0;
let gameBoardArray = [];

// Creates and stores players
const playerFactory = (name, wins, loses, symbol, tiles) => {
    tiles = [];
    const playerInfo = () => console.log(`Player: ${name}, Wins: ${wins}, Loses: ${loses}, Symbol: ${symbol}, Tiles: ${[tiles]}`);
    return { 
        name: name,
        tiles: [],
        playerInfo,
    };
};

// Handles all events, functions, and variables needed for game functionality
const ticTacToeGame = (function() {
    'use strict';

    // Handles all events and functions that involve starting or reseting the game
    // functions to open and close the form
    const startGameButton = document.querySelector('#start-game');
    const startGameForm = document.querySelector('#game-start-container');
    const closeGameForm = document.querySelector('#close-game-form');

    startGameButton.addEventListener('click', openForm);
    closeGameForm.addEventListener('click', closeForm);

    let gameFormOpen = false;
    function openForm() {
        if (gameFormOpen === false) {
            console.log("start game has been clicked");
            startGameForm.style.display = "flex";
            gameFormOpen = true;
        }
    }
    function closeForm() {
        if (gameFormOpen === true) {
            console.log("Close game form button has been clicked");
            startGameForm.style.display = "none";
            gameFormOpen = false;
        }
    }

    // Controls for when Players are being selected
    const gameForm = document.querySelector('#game-start-form');
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
    //placeholder for symbol choice variables

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

    // Handles and stores game settings when submitting the game form
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
            closeForm();
            return {playerOne, playerTwo}
        } else if (gameMode == 1 && playerOneSymbolChoice == 2 && playerTwoSymbolChoice == 1 && playerOneName != "") {
            displayNamePlayerOne.textContent = `${playerOneName}`;
            displayNamePlayerTwo.textContent = "Computer";
            displaySymbolPlayerOne.textContent = "Shield 🛡️";
            displaySymbolPlayerTwo.textContent = "Sword 🗡️";
            displaySymbolPlayerOne.classList.add('player-name-text');
            displaySymbolPlayerTwo.classList.add('player-name-text');
            playerOne = playerFactory(`${playerOneName}`, 0, 0, 'Shield 🛡️');
            playerTwo = playerFactory('Computer', 0, 0, 'Sword 🗡️');
            gameForm.reset();
            closeForm();
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
            closeForm();
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
            closeForm();
            return {playerOne, playerTwo}
        } else {
            location.reload();
        } 
        return {
            playerOne,
            playerTwo,
        }
    }

    // Handles player turns in game
    let playerTurn = 0;

    const _playerTurn = (function() {
        'use strict';
    
        const playerOneDisplay = document.querySelector('#player-one');
        const playerTwoDisplay = document.querySelector('#player-two');
    
        const submitGameSettings = document.querySelector('#submit-game-settings');
        submitGameSettings.addEventListener('click', whosTurnIsIt);
    
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
    
    // Array to hold symbol placement of game
    // Handles all events for the gameboard
    const _gameBoard = (function() {
        'use strict';

        const gameBoardHTML = document.querySelector('#game-board');
        gameBoardHTML.addEventListener('click', identifyBoardCell);
    
        // Identifies which cell on the board was clicked and sets the event.target.id to placeSymbol()
        function identifyBoardCell(event) {
            let selectedCell = event.target.id;
            console.log(`${selectedCell}`);
            cellToGameBoardArrayHandler(selectedCell);
        }

        // Places the symbol on the board for that player
        function placeSymbol(selectedCell) {
            if (playerTurn == 1 && playerOneSymbolChoice == 1) {
                const swordSymbol = document.createElement("img");
                swordSymbol.src = "./imgs/sword.svg";
                swordSymbol.classList.add("sword-game-piece");
            } else if (playerTurn == 1 && playerOneSymbolChoice == 2) {
                const shieldSymbol = document.createElement("img");
                shieldSymbol.src = "./imgs/shield.svg";
                shieldSymbol.classList.add("shield-game-piece");
            } else if (playerTurn == 2 && playerOneSymbolChoice == 1) {
                const swordSymbol = document.createElement("img");
                swordSymbol.src = "./imgs/sword.svg";
                swordSymbol.classList.add("sword-game-piece");
            } else if (playerTurn == 2 && playerOneSymbolChoice == 2) {
                const shieldSymbol = document.createElement("img");
                shieldSymbol.src = "./imgs/shield.svg";
                shieldSymbol.classList.add("shield-game-piece");
            } else {
                console.log("Something went wrong");
                return;
            }
        };

        // Validates that gameBoardArray doesn't already have the cell placed on the board, then proceeds to push cell position into the array if it doesn't exist
        function cellToGameBoardArrayHandler(selectedCell) {
            if (selectedCell == "row1col1") {
                if (gameBoardArray.includes(1, 0) === true) {
                    return
                } else if (gameBoardArray.includes(1, 0) === false) {
                    gameBoardArray.push(1);
                }
            } else if (selectedCell == "row1col2") {
                if (gameBoardArray.includes(2, 0) === true) {
                    return
                } else if (gameBoardArray.includes(2, 0) === false) {
                    gameBoardArray.push(2);
                }
            } else if (selectedCell == "row1col3") {
                if (gameBoardArray.includes(3, 0) === true) {
                    return
                } else if (gameBoardArray.includes(3, 0) === false) {
                    gameBoardArray.push(3);
                }
            } else if (selectedCell == "row2col1") {
                if (gameBoardArray.includes(4, 0) === true) {
                    return
                } else if (gameBoardArray.includes(4, 0) === false) {
                    gameBoardArray.push(4);
                }
            } else if (selectedCell == "row2col2") {
                if (gameBoardArray.includes(5, 0) === true) {
                    return
                } else if (gameBoardArray.includes(5, 0) === false) {
                    gameBoardArray.push(5);
                }
            } else if (selectedCell == "row2col3") {
                if (gameBoardArray.includes(6, 0) === true) {
                    return
                } else if (gameBoardArray.includes(6, 0) === false) {
                    gameBoardArray.push(6);
                }
            } else if (selectedCell == "row3col1") {
                if (gameBoardArray.includes(7, 0) === true) {
                    return
                } else if (gameBoardArray.includes(7, 0) === false) {
                    gameBoardArray.push(7);
                }
            } else if (selectedCell == "row3col2") {
                if (gameBoardArray.includes(8, 0) === true) {
                    return
                } else if (gameBoardArray.includes(8, 0) === false) {
                    gameBoardArray.push(8);
                }
            } else if (selectedCell == "row3col3") {
                if (gameBoardArray.includes(9, 0) === true) {
                    return
                } else if (gameBoardArray.includes(9, 0) === false) {
                    gameBoardArray.push(9);
                }
            }
            console.log(`${gameBoardArray}`);
        }
    })();
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