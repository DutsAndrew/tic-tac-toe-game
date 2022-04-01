const gameForm = (function() {
    'use strict';

    const startGameButton = document.querySelector('#start-game');
    const startGameForm = document.querySelector('#game-start-container');
    const closeGameForm = document.querySelector('#close-game-form');
    const gameForm = document.querySelector('#game-start-form');
    const playerTwoContainer = document.querySelector('#player-two-input-container');
    const submitGameSettings = document.querySelector('#submit-game-settings');
    const displayNamePlayerOne = document.querySelector('#player-one-name-display');
    const displayNamePlayerTwo = document.querySelector('#player-two-name-display');

    // functions to open and close the form
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

    // Handles setting up game when submitting form
    submitGameSettings.addEventListener('click', _submitSettings)

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
        } else if (gameMode == 1 && playerOneName != "") {
            displayNamePlayerOne.textContent = `${playerOneName}`;
            displayNamePlayerTwo.textContent = "Computer";
            gameForm.reset();
            _closeForm();
        } else if (gameMode == 2 && playerOneName != "" && playerTwoName != "") {
            displayNamePlayerOne.textContent = `${playerOneName}`;
            displayNamePlayerTwo.textContent = `${playerTwoName}`;
            gameForm.reset();
            _closeForm();
        } else {
            location.reload();
        }
    }

    // // Check to see if Player One and Player Two variables have data, and if they meet the checks to send the information out to global scope.
    // if (typeof storePlayerTwoName !== 'undefined' ) {
    //     return {
    //         playerOneName,
    //         playerTwoName,
    //         gameMode
    //     }
    // } else if (typeof storePlayerOneName !== 'undefined' && typeof storePlayerTwoName == 'undefined') {
    //     return {
    //         playerOneName,
    //         gameMode
    //     }
    // }
})();


// const playerModule = (function() {
//     'use strict';

//     const playerFactory = (name) => {
//         if (playerNameExists === true) {
//             playerOne
//         }

//     }

// })();