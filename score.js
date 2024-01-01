// Iteration 5: Store the player score and display it on the game over screen
document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('play-again-button');
    playButton.addEventListener('click', function () {
      window.location.href = 'game.html';
    });
  });


document.addEventListener('DOMContentLoaded', function () {
    var score = localStorage.getItem('score'); // Retrieve the score
    document.getElementById('score-board').textContent = score; // Display the score
  });