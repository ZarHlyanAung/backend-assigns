/**
 *
 *** Assign 1: Prime Number Checker ***
 *
 * **/
function isPrime(num) {
  if (num > 0) {
    for (let i = 2; i <= num; i++) {
      if (num % i == 0 && num !== i) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return 'pls provide a positive interger';
  }
}

console.log('Assign 1: Prime number checking...');
console.log(isPrime(-2));
console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(4));

/**
 *
 *** Assign 2: Factorial Calculator ***
 *
 * **/
function factorial(n) {
  if (n < 0) {
    return 'pls provide positive integer';
  } else if (n == 0) {
    return 1;
  } else {
    let result = 1;

    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

console.log('Assign 2: Factorial Calculator operating...');
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));

/**
 *
 *** Assign 3: Palindrome Checker ***
 *
 * **/
function isPalindrome(string) {
  //   let reversed = string.split('').reverse().join('') //practing hard way
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  if (string === reversed) return true;
  return false;
}

console.log('Assign 3: Palindrome Checker...');
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));

/**
 *
 *** Assign 4: Temperature Converter ***
 *
 * **/
function convertTemperature(num, type) {
  if (type == 'C') {
    //tf = 9/5 tc + 32
    let tf, firstCal;
    firstCal = (9 / 5) * num;
    tf = firstCal + 32;

    return `${tf}°F`;
  } else if (type == 'F') {
    //tc = 5/9 (tf-32)
    let tc, firstCal;
    firstCal = num - 32;
    tc = (5 / 9) * firstCal;

    return `${tc}°C`;
  } else {
    return 'pls provide only C or F as your origin';
  }
}

console.log('Assign 4: Temperature Converter...');
console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(98.6, 'F'));
console.log(convertTemperature(-40, 'F'));

/**
 *
 *** Assign 5: vowel Counter ***
 *
 * **/
function countVowel(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for (let i = 0; i <= string.length; i++) {
    if (vowels.includes(string[i])) counter++;
  }

  return counter;
}

console.log('Assign 5: vowel Counter...');
console.log(countVowel('hello'));
console.log(countVowel('world'));
console.log(countVowel('dinosaur'));

//finished at 4:21pm , Feb 5, 2024
