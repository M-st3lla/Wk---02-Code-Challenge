const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter here: ', (input) => {
    function capLetters(input) {
        const words=input.split('');
        const capitalizedWords=words.map(word =>{
    if (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()===word.charAt(0)+word.slice(1)){
      return word.charAt(0).toLowerCase() + word.slice(1).toUpperCase();
    }else{
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
 });
    return capitalizedWords.join(' ');
    }
    console.log(capLetters(input));
    readline.close();
  });
  

