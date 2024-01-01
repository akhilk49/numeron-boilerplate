document.addEventListener('DOMContentLoaded', function () {
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    var number1Element = document.getElementById('number1');
    var number2Element = document.getElementById('number2');
    var timerElement = document.getElementById('timer');
  
    var numberInterval; // Variable to store the interval for updating numbers
    var timerInterval; // Variable to store the interval for updating the timer
    var timeRemaining; 
    var score = 0; // Initialize score
  
    function startGame() {
      timeRemaining = 60; // Set the initial time in seconds for each game
      updateNumbers();
      updateTimer();
      
      // Start the intervals
      numberInterval = setInterval(updateNumbers, 5000); // Update numbers every 5 seconds
      timerInterval = setInterval(updateTimer, 1000); // Update timer every second
    }
  
    function updateNumbers() {
      var randomNum1 = getRandomNumber(1, 100);
      var randomNum2 = getRandomNumber(1, 100);
      number1Element.textContent = randomNum1;
      number2Element.textContent = randomNum2;
    }
  
    function updateTimer() {
      timerElement.textContent = 'Time left: ' + timeRemaining + 's';
  
      if (timeRemaining === 0) {
        endGame();
      } else {
        timeRemaining--;
      }
    }
  
    function endGame() {
      clearInterval(numberInterval);
      clearInterval(timerInterval);
      window.location.href ='gameover.html';
      console.log(score);
      localStorage.setItem('score', score);
    }
  
    var greaterThanButton = document.getElementById('greater-than');
    var equalToButton = document.getElementById('equal-to');
    var lesserThanButton = document.getElementById('lesser-than');
  
    greaterThanButton.addEventListener('click', function () {
      checkRelation('greater');
    });
  
    equalToButton.addEventListener('click', function () {
      checkRelation('equal');
    });
  
    lesserThanButton.addEventListener('click', function () {
      checkRelation('lesser');
    });
  
    function checkRelation(selectedRelation) {
      var num1 = parseInt(number1Element.textContent);
      var num2 = parseInt(number2Element.textContent);
  
      if (selectedRelation === 'greater' && num1 > num2) {
        // alert('Correct!');
        score+=1;
      } else if (selectedRelation === 'equal' && num1 === num2) {
        // alert('Correct!');
        score+=1;
      } else if (selectedRelation === 'lesser' && num1 < num2) {
        // alert('Correct!');
        score+=1;
      } else {
        alert('Incorrect. Try again!');
      }
    }
  
    startGame(); // Initial start of the game
});

  