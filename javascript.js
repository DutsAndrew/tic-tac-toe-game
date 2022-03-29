const gameForm = (function() {
    'use strict';

    const startGameButton = document.querySelector('#start-game');
    const startGameForm = document.querySelector('#game-start-container');
    const closeGameForm = document.querySelector('#close-game-form');
    const playerTwoName = document.querySelector('#player-two-input-container');

    startGameButton.addEventListener('click', _openForm);
    closeGameForm.addEventListener('click', _closeForm);

    // Controls for when Players are being selected
    const playerVsComputer = document.getElementById('player-vs-computer').onclick = function() {
        console.log("Player VS Computer was selected");
        playerTwoName.style.display = "none";
    }

    const playerVsPlayer = document.getElementById('player-vs-player').onclick = function() {
        console.log("Player VS Player was selected");
        if (playerTwoName.style.display = "none") {
            playerTwoName.style.display = "flex";
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
})();


const playerModule = (function() {
    'use strict';

    const playerFactory = (name) => {
        if (playerNameExists === true) {
            playerOne
        }

    }

})();