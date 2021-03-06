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
  this.lifeExpEarthYears = 78.2; // Life expectancy, in years, United States (2018)
  this.lifeExp = 1000*60*60*24*365.25*this.lifeExpEarthYears; // 78.2 earth years converted to milliseconds
}

Person.prototype.earthAge = function() {
  const earthYear = 1000*60*60*24*365.25;
  return (this.age/earthYear);
};

Person.prototype.earthLifeLeft = function() {
  return this.lifeExpEarthYears - this.earthAge();
};

Person.prototype.mercuryAge = function() {
  const mercuryYear = 1000*60*60*24*87.97;
  return this.age/mercuryYear;
};

Person.prototype.mercuryLifeLeft = function() {
  const mercuryYear = 1000*60*60*24*87.97;
  return (this.lifeExp - this.age)/mercuryYear;
};

Person.prototype.venusAge = function() {
  const venusYear = 1000*60*60*24*224.7
  return this.age/venusYear;
};

Person.prototype.venusLifeLeft = function() {
  const venusYear = 1000*60*60*24*224.7
  return (this.lifeExp - this.age)/venusYear;
};

Person.prototype.marsAge = function() {
  const marsYear = 1000*60*60*24*686.97
  return this.age/marsYear;
};

Person.prototype.marsLifeLeft = function() {
  const marsYear = 1000*60*60*24*686.97
  return (this.lifeExp - this.age)/marsYear;
};

Person.prototype.jupiterAge = function() {
  const jupiterYear = 1000*60*60*24*4332.59;
  return this.age/jupiterYear;
};

Person.prototype.jupiterLifeLeft = function() {
  const jupiterYear = 1000*60*60*24*4332.59;
  return (this.lifeExp - this.age)/jupiterYear;
};

Person.prototype.saturnAge = function() {
  const saturnYear = 1000*60*60*24*10759.22
  return this.age/saturnYear;
};

Person.prototype.saturnLifeLeft = function() {
  const saturnYear = 1000*60*60*24*10759.22
  return (this.lifeExp - this.age)/saturnYear;
};

Person.prototype.neptuneAge = function() {
  const neptuneYear = 1000*60*60*24*60190.03;
  return this.age/neptuneYear;
};

Person.prototype.neptuneLifeLeft = function() {
  const neptuneYear = 1000*60*60*24*60190.03;
  return (this.lifeExp - this.age)/neptuneYear;
};

Person.prototype.uranusAge = function() {
  const uranusYear = 1000*60*60*24*30687.15;
  return this.age/uranusYear;
};

Person.prototype.uranusLifeLeft = function() {
  const uranusYear = 1000*60*60*24*30687.15;
  return (this.lifeExp - this.age)/uranusYear;
};
