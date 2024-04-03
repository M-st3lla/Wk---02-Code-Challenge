const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter an array of numbers: ', (input) => {
    const numbers = input.split(' ').map(num => parseInt(num));
    
    function isPrime(num) {
      if (num <= 1) return false;
      if (num === 2) return true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    
    function filterPrimes(arr) {
      return arr.filter(num => isPrime(num));
    }
    
    const primeArray = filterPrimes(numbers);
    
    console.log('Original Array:', numbers);
    console.log('Prime Numbers:', primeArray);
    
    readline.close();
  });