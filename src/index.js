module.exports = function zeros(expression) {
    let factorialsArray = expression.split('*');

  let zeros = 0;
  let fives = 0;
  let deuces = 0;

  for (let factorial of factorialsArray) {

    if (factorial.match(/!/g).length === 1) {
      let power = 1;
      let powerOfFife = Math.pow(5, power);
      let powerOfTwo = Math.pow(2, power);
      factorial = factorial.replace(/!/g, '');
      for (; factorial >= powerOfFife; powerOfFife = Math.pow(5, ++power)) {
        zeros += Math.trunc(factorial / powerOfFife);
        deuces -= Math.trunc(factorial / powerOfFife);
      }
      for (; factorial >= powerOfTwo; powerOfTwo = Math.pow(2, ++power)) {
        deuces += Math.trunc(factorial / powerOfTwo);
      }
    } else if ((factorial.replace(/!/g, '')) % 2 === 0) {
      let power = 1;
      let powerOfTen = Math.pow(10, power);
      let powerOfFifty = Math.pow(50, power);
      let powerOfTwo = Math.pow(2, power);
      factorial = factorial.replace(/!/g, '');
      for (; factorial >= powerOfTen; powerOfTen = Math.pow(10, ++power)) {
        zeros += Math.trunc(factorial / powerOfTen);
      }
      for (; factorial >= powerOfTwo; powerOfTwo = Math.pow(2, ++power)) {
        deuces += Math.trunc(factorial / powerOfTwo);
      }
      for (; factorial >= powerOfFifty; powerOfFifty = Math.pow(50, ++power)) {
        fives += Math.round(Math.trunc(factorial / powerOfFifty) / 2);
      }
    } else {
      let power = 1;
      let powerOfFive = Math.pow(5, power);
      factorial = factorial.replace(/!/g, '');
      for (; factorial >= powerOfFive; powerOfFive = Math.pow(5, ++power)) {
        fives += Math.round(Math.trunc(factorial / powerOfFive) / 2);
      }
    }
  }

  if (fives >= deuces) {
    zeros += deuces;
  } else if (deuces > fives) {
    zeros += fives;
  }

  return zeros;

}
