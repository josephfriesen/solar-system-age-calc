/*

import { RandomDate } from './../src/js/random-date.js';
*/

export function rand(lowerBound, upperBound) {
  return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}
export function RandomDate() {
  this.randYear = rand(1940,2015);
  this.randMonth = rand(0,11);
  this.randDay = this.getDay();
  this.date = new Date(this.randYear, this.randMonth, this.randDay);
}
RandomDate.prototype.getDay = function() {
  if ([3,5,8,10].includes(this.randMonth)) {
    return rand(1,30);
  }
  else if (this.randMonth == 1) {
    if (this.randYear % 4 == 0) {
      return rand(1,29);
    }
    else {
      return rand(1,28);
    }
  }
  else {
    return rand(1,31);
  }
};
