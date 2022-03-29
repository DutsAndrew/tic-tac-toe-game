const gameForm = (function() {
    'use strict';

    const startGameButton = document.querySelector('#start-game');
    const startGameForm = document.querySelector('#game-start-container');
    const closeGameForm = document.querySelector('#close-game-form');

    startGameButton.addEventListener('click', startGame);
    closeGameForm.addEventListener('click', closeForm)

    let gameFormOpen = false;

    function startGame() {
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
})();


const playerModule = (function() {
    'use strict';

    const playerFactory = (name) => {
        if (playerNameExists === true) {
            playerOne
        }

    }

})();