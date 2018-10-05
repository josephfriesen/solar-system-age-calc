/*

The Person object will instantiate with the user's birthdate and will have a collection of methods that will be used to calculate the user's age on other planets, e.g. suppose I create a user Joe (me!), a method (to be defined later) Joe.marsAge() will return Joe.earthAge()/1.88.

*/

export function Person(birthdate) {
  const d = new Date();
  this.today = d;
  this.birthdate = birthdate;
  this.year = birthdate.getFullYear();
  this.month = birthdate.getMonth();
  this.day = birthdate.getDate();
  this.age = this.earthAge();
}

Person.prototype.earthAge = function() {
  const msAge = this.today.getTime() - this.birthdate.getTime();
  const year = 1000*60*60*24*365.25;
  return (msAge/year).toFixed(3);
};

Person.prototype.mercuryAge = function() {
  return 0;
};

Person.prototype.venusAge = function() {
  return 0;
};

Person.prototype.marsAge = function() {
  return 0;
};

Person.prototype.jupiterAge = function() {
  return 0;
};

Person.prototype.saturnAge = function() {
  return 0;
};

Person.prototype.neptuneAge = function() {
  return 0;
};

Person.prototype.uranusAge = function() {
  return 0;
};
