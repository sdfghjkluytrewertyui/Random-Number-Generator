// index.js

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const min = 1;
  const max = 100;
  const randomNumber = generateRandomNumber(min, max);
  console.log(`Random number between ${min} and ${max}: ${randomNumber}`);
  