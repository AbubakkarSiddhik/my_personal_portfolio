
    function Guess() {
      var value = document.getElementById("value").value;
      if (value === "" || value < 0 || value > 10) {
          alert("Please enter a number within the range 0 to 10");
      } else {
          var min = 1, max = 10;
          var random = Math.floor(Math.random() * (max - min + 1)) + min;
          var scoreElement = document.getElementById("score");
          var scr = parseInt(scoreElement.textContent);

          if (value == random) {
              alert("You Win! Your score is " + scr);
              document.getElementById("retryButton").style.display = "inline"; // Show retry button
          } else {
              scr -= 1;
              scoreElement.textContent = scr;
              if (scr <= 0) {
                  alert("You lose, try again later");
                  document.getElementById("retryButton").style.display = "inline"; // Show retry button
                  scoreElement.textContent = 0; // Ensure the score does not go below 0
                  document.getElementById("retryButton").style.display = "inline"; // Show retry button
              } else {
                  alert("You are Wrong   X   |   " + random +"  is  Correct  ✓ " );
                  document.getElementById("value").value = "";
              }
          }
      }
    }

    function resetGame() {
        document.getElementById("score").textContent = "10"; // Reset score
        document.getElementById("retryButton").style.display = "none"; // Hide retry button
        document.getElementById("value").value = ""; // Clear input
    }
  