
    const randomNumber = Math.floor(Math.random() * 100)+1 ;
    const guessButton = document.getElementById('guess-button');
    const guessInput = document.getElementById('guess-input');
    const resultParagraph = document.getElementById('result');
    let attempts = 0;

    guessButton.addEventListener('click', () => {
      const userGuess = Number(guessInput.value);
      attempts++;

      if (!userGuess || userGuess < 1 || userGuess > 100) {
        resultParagraph.textContent = 'Please enter a valid number between 1 and 100.';
        return;
      }

      if (userGuess === randomNumber) {
        resultParagraph.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        guessButton.disabled = true;
      } else if (userGuess < randomNumber) {
        resultParagraph.textContent = 'Too low! Try again.';
      } else {
        resultParagraph.textContent = 'Too high! Try again.';
      }

      guessInput.value = '';
   
    });
  