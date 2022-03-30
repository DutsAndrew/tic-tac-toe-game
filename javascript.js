const gameForm = (function() {
    'use strict';

    const startGameButton = document.querySelector('#start-game');
    const startGameForm = document.querySelector('#game-start-container');
    const closeGameForm = document.querySelector('#close-game-form');
    const gameForm = document.querySelector('#game-start-form');
    let playerOneName = document.getElementById('player-one-name').value;
    let playerTwoName = document.getElementById('player-two-name').value;
    const playerTwoContainer = document.querySelector('#player-two-input-container');
    const submitGameSettings = document.querySelector('#submit-game-settings');

    startGameButton.addEventListener('click', _openForm);
    closeGameForm.addEventListener('click', _closeForm);
    submitGameSettings.addEventListener('click', _submitSettings)

    // Controls for when Players are being selected
    let gameMode = 0;

    const playerVsComputer = document.getElementById('player-vs-computer').onclick = function() {
        playerTwoContainer.style.display = "none";
        gameMode = 1;
        console.log(`Game Mode: ${gameMode} was selected`);
    }
    const playerVsPlayer = document.getElementById('player-vs-player').onclick = function() {
        gameMode = 2;
        console.log(`Game Mode: ${gameMode} was selected`);
        if (playerTwoContainer.style.display = "none") {
            playerTwoContainer.style.display = "flex";
        }
    }

    // functions to open and close the form
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
    function _submitSettings() {
        const displayNamePlayerOne = document.querySelector('#player-one-name-display');
        const displayNamePlayerTwo = document.querySelector('#player-two-name-display');

        let changePlayerOne;
        let changePlayerTwo;

        if (gameMode === 0) {
            gameForm.reset();
            alert("You cannot start a game without setting a game mode, please select: 'Player VS Player' or 'Player VS Computer'");
        } else if(playerOneName.length === 0 && gameMode === 1) {
            gameForm.reset();
            alert("Player 1 does not have a name entered, please try again");
        } else if (gameMode === 2 && playerOneName.length === 0 || playerTwoName.length === 0) {
            gameForm.reset();
            alert("Either Player 1 or Player 2 do not have a name, please fix this to start the game");
        } else if (gameMode !== 0 && gameMode !== 2 && playerOneName.length !== 0) {
            changePlayerOne = playerOneName;
            displayNamePlayerOne.style.textContent = `${changePlayerOne}`;
            displayNamePlayerTwo.style.textContent = "Computer";
            gameForm.reset();
            _closeForm();
        } else if (gameMode !== 0 && gameMode !== 1 && playerOneName.length !== 0 && playerTwoName.length !== 0) {
            changePlayerOne = playerOneName;
            changePlayerTwo = playerTwoName;
            displayNamePlayerOne.style.textContent = `${changePlayerOne}`;
            displayNamePlayerTwo.style.textContent = `${changePlayerTwo}`;
            gameForm.reset();
            _closeForm();
        } else {
            window.reload();
        }
    }
})();


const playerModule = (function() {
    'use strict';

    const playerFactory = (name) => {
        if (playerNameExists === true) {
            playerOne
        }

    }

})();