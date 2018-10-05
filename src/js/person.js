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
  this.age = this.today.getTime() - this.birthdate.getTime();
}

Person.prototype.earthAge = function() {
  const earthYear = 1000*60*60*24*365.25;
  return (this.age/earthYear).toFixed(3);
};

Person.prototype.mercuryAge = function() {
  const mercuryYear = 1000*60*60*24*87.97;
  return this.age/mercuryYear;
};

Person.prototype.venusAge = function() {
  const venusYear = 1000*60*60*24*224.7
  return this.age/venusYear;
};

Person.prototype.marsAge = function() {
  const marsYear = 1000*60*60*24*686.97
  return this.age/marsYear;
};

Person.prototype.jupiterAge = function() {
  const jupiterYear = 1000*60*60*24*4332.59;
  return this.age/jupiterYear;
};

Person.prototype.saturnAge = function() {
  const saturnYear = 1000*60*60*24*10759.22
  return this.age/saturnYear;
};

Person.prototype.neptuneAge = function() {
  const neptuneYear = 1000*60*60*24*60190.03;
  return this.age/neptuneYear;
};

Person.prototype.uranusAge = function() {
  const uranusYear = 1000*60*60*24*30687.15;
  return this.age/uranusYear;
};
