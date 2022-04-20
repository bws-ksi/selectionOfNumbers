'use strict';

function findSolution(target, firstNumber, secondNumber) {
  function find(curent, history) {
    if(curent === target) {
      return history;
    } else if (curent > target) {
      return null;
    } else {
      return find (curent + firstNumber, `(${history} + ${firstNumber})`) ||
              find(curent * secondNumber, `(${history} * ${secondNumber})`)
    }
  }
  return find (1, '1');
}

function gettingNumber(variable) {
  let numberr = Number(prompt('Enter ' + variable + ' ( positive integer number)'));
  if (!isNaN(numberr) && numberr > 0 ) {
    return numberr;
  }
  return alert ('wrong number');  
}


let target = gettingNumber('target number');
let firstNumber = gettingNumber('first number');
let secondNumber = gettingNumber('second number');


console.log(findSolution(target, firstNumber, secondNumber));