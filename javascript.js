// Player Variables for Game
let playerOne;
let playerTwo;
let gameBoardArray = [];
let playerOneGameCells = [];
let playerTwoGameCells = [];

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

        const submitGameSettings = document.querySelector('#submit-game-settings');
        submitGameSettings.addEventListener('click', whosTurnIsIt);
    
        // Handles player turns in game
        let playerTurn = 0;

        function whosTurnIsIt() {
            const playerOneDisplay = document.querySelector('#player-one');
            const playerTwoDisplay = document.querySelector('#player-two');
            const turnTextP1 = document.createElement("p");
            const turnTextP2 = document.createElement("p");
            const turnTextHandler = document.querySelector('.turn-text');

            if (playerTurn == 0) {
                playerTurn = 1;
    
                turnTextP1.classList.add('turn-text');
                turnTextP1.textContent = "It is Player One's Turn";
                playerOneDisplay.classList.add('shakeItAnimation');
                playerOneDisplay.appendChild(turnTextP1);
            } else if (playerTurn == 1) {
                turnTextHandler.remove();
                playerOneDisplay.classList.remove('shakeItAnimation');
                playerTurn = 2;
    
                turnTextP2.classList.add('turn-text');
                turnTextP2.textContent = "It is Player Two's Turn";
                playerTwoDisplay.classList.add('shakeItAnimation');
                playerTwoDisplay.appendChild(turnTextP2);
            } else if (playerTurn == 2) {
                turnTextHandler.remove();
                playerTwoDisplay.classList.remove('shakeItAnimation');
                playerTurn = 1;
    
                turnTextP1.classList.add('turn-text');
                turnTextP1.textContent = "It is Player One's Turn";
                playerOneDisplay.classList.add('shakeItAnimation');
                playerOneDisplay.appendChild(turnTextP1);
            }
        }

        const gameBoardHTML = document.querySelector('#game-board');
        gameBoardHTML.addEventListener('click', GameEventHandler);

        // Validates if game was started, and then identifies which cell on the board was clicked and sends it to the gameboard array through helper functions
        let selectedCell;
        let cellLocation;

        function GameEventHandler(event) {
            if (gameMode == 0 ) {
                return
            } else if (gameMode != 0) {
                selectedCell = event.target.id;
                cellLocation = document.querySelector(`#${selectedCell}`);
                gameBoardCellHandler(selectedCell);
                placeSymbol(cellLocation);
                checkForWinConditions();
                turnCounter();
            }
        }

        // Validates that gameBoardArray doesn't already have the cell placed on the board, then proceeds to push cell position into the array if it doesn't exist

        function gameBoardCellHandler() {
            if (selectedCell == "row1col1") {
                if (gameBoardArray.includes(1, 0) === true) {
                    alert("Whoops, that spot is taken");
                    return
                } else if (gameBoardArray.includes(1, 0) === false) {
                    if (playerTurn == 1) {
                        gameBoardArray.push(1.1);
                    } else if (playerTurn == 2) {
                        gameBoardArray.push(1.2);
                    }
                }
            } else if (selectedCell == "row1col2") {
                if (gameBoardArray.includes(2, 0) === true) {
                    alert("Whoops, that spot is taken");
                    return
                } else if (gameBoardArray.includes(2, 0) === false) {
                    if (playerTurn == 1) {
                        gameBoardArray.push(2.1);
                    } else if (playerTurn == 2) {
                        gameBoardArray.push(2.2);
                    }
                }
            } else if (selectedCell == "row1col3") {
                if (gameBoardArray.includes(3, 0) === true) {
                    alert("Whoops, that spot is taken");
                    return
                } else if (gameBoardArray.includes(3, 0) === false) {
                    if (playerTurn == 1) {
                        gameBoardArray.push(3.1);
                    } else if (playerTurn == 2) {
                        gameBoardArray.push(3.2);
                    }
                }
            } else if (selectedCell == "row2col1") {
                if (gameBoardArray.includes(4, 0) === true) {
                    alert("Whoops, that spot is taken");
                    return
                } else if (gameBoardArray.includes(4, 0) === false) {
                    if (playerTurn == 1) {
                        gameBoardArray.push(4.1);
                    } else if (playerTurn == 2) {
                        gameBoardArray.push(4.2);
                    }
                }
            } else if (selectedCell == "row2col2") {
                if (gameBoardArray.includes(5, 0) === true) {
                    alert("Whoops, that spot is taken");
                    return
                } else if (gameBoardArray.includes(5, 0) === false) {
                    if (playerTurn == 1) {
                        gameBoardArray.push(5.1);
                    } else if (playerTurn == 2) {
                        gameBoardArray.push(5.2);
                    }
                }
            } else if (selectedCell == "row2col3") {
                if (gameBoardArray.includes(6, 0) === true) {
                    alert("Whoops, that spot is taken");
                    return
                } else if (gameBoardArray.includes(6, 0) === false) {
                    if (playerTurn == 1) {
                        gameBoardArray.push(6.1);
                    } else if (playerTurn == 2) {
                        gameBoardArray.push(6.2);
                    }
                }
            } else if (selectedCell == "row3col1") {
                if (gameBoardArray.includes(7, 0) === true) {
                    alert("Whoops, that spot is taken");
                    return
                } else if (gameBoardArray.includes(7, 0) === false) {
                    if (playerTurn == 1) {
                        gameBoardArray.push(7.1);
                    } else if (playerTurn == 2) {
                        gameBoardArray.push(7.2);
                    }
                }
            } else if (selectedCell == "row3col2") {
                if (gameBoardArray.includes(8, 0) === true) {
                    alert("Whoops, that spot is taken");
                    return
                } else if (gameBoardArray.includes(8, 0) === false) {
                    if (playerTurn == 1) {
                        gameBoardArray.push(8.1);
                    } else if (playerTurn == 2) {
                        gameBoardArray.push(8.2);
                    }
                }
            } else if (selectedCell == "row3col3") {
                if (gameBoardArray.includes(9, 0) === true) {
                    alert("Whoops, that spot is taken");
                    return
                } else if (gameBoardArray.includes(9, 0) === false) {
                    if (playerTurn == 1) {
                        gameBoardArray.push(9.1);
                    } else if (playerTurn == 2) {
                        gameBoardArray.push(9.2);
                    }
                }
            }
            console.log(`${gameBoardArray}`);
        }

        // Assigns symbol imgs and class to be placed on board
        function placeSymbol() {
            if (playerTurn == 1 && playerOneSymbolChoice == 1) {
                let swordSymbol = document.createElement("img");
                    swordSymbol.src = "./imgs/sword.svg";
                    swordSymbol.classList.add("sword-game-piece");
                cellLocation.appendChild(swordSymbol);
            } else if (playerTurn == 1 && playerOneSymbolChoice == 2) {
                let shieldSymbol = document.createElement("img");
                    shieldSymbol.src = "./imgs/shield.svg";
                    shieldSymbol.classList.add("shield-game-piece");
                cellLocation.appendChild(shieldSymbol);
            } else if (playerTurn == 2 && playerTwoSymbolChoice == 1) {
                let swordSymbol = document.createElement("img");
                    swordSymbol.src = "./imgs/sword.svg";
                    swordSymbol.classList.add("sword-game-piece");
                cellLocation.appendChild(swordSymbol);
            } else if (playerTurn == 2 && playerTwoSymbolChoice == 2) {
                let shieldSymbol = document.createElement("img");
                    shieldSymbol.src = "./imgs/shield.svg";
                    shieldSymbol.classList.add("shield-game-piece");
                cellLocation.appendChild(shieldSymbol);
            } else {
                console.log("Something went wrong");
                return;
            }
        };

        // Counts player turns
        function turnCounter(playerTurn) {
            if (playerTurn == 1) {
                playerTurn = 2;
            } else if (playerTurn == 2) {
                playerTurn = 1;
            }
            whosTurnIsIt();
        }

        function checkForWinConditions() {

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