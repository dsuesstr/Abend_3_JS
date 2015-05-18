"use strict";
function testTelNumber(str){
  var regEx = /^((\+[0-9]{2,4}([ -][0-9]+?[ -]| ?\([0-9]+?\) ?))|(\(0[0-9 ]+?\) ?)|(0[0-9]+? ?( |-|\/) ?))([0-9]+?[ \/-]?)+?[0-9]$/;
  return regEx.test(str);
}

console.log(testTelNumber("+41 76 451 12 42"));	
console.log(testTelNumber("076 451 12 42"));
console.log(testTelNumber("+49 1457 2564854"));