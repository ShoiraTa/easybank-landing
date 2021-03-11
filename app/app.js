function fizzBuzz (n) {
  var arr = [];

  function fizzBuzzI(i) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else {
      arr.push(i);
    }
    if (i < n) fizzBuzzI(i + 1);
  }
  fizzBuzzI(1);
  return arr;
 
};

console.log(fizzBuzz(100));

console.log((fizzBuzz()[2], "Fizz"));