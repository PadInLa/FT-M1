"use strict";

function BinarioADecimal(num) {
  var test = 0;
  return parseInt(num, 2);
}

function DecimalABinario(num) {
  return num.toString(2);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
