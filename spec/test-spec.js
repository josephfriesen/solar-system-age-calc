import { Person } from './../src/js/person.js';
import { RandomDate } from './../src/js/random-date.js';

describe('The "Person" object and its associated prototypes', function() {

  const today = new Date();
  const Me = new Person(new Date(1984, 8, 3));
  let RandomBirth;
  let SomeDude;

  beforeEach(function() {
    RandomBirth = new RandomDate();
    SomeDude = new Person(RandomBirth.date);
  });

  // comment this first test out after, just checking that I understand how Date objects work.
  it('should give the test variable "today" as the current date', function() {

    expect(today.getDay()).toEqual(5); // is today Friday?
    expect(today.getDate()).toEqual(5); // is today the fifth?
    expect(today.getMonth()).toEqual(9); // is it October?
    expect(today.getFullYear()).toEqual(2018); // is it 2018?

  });

  it('should show that, given a specific birthdate, the Person object has correctly recorded that date as a value of the key "Person.birthdate"', function() {

    expect(SomeDude.birthdate).toEqual(RandomBirth.date);

  });

  it('should show that the birth year, month and day have all been read from the birthdate object and been recorded under the appropriate key', function() {

    expect(Me.year).toEqual(1984);
    expect(Me.month).toEqual(8);
    expect(Me.day).toEqual(3);

  });

  it('should show that the person object has correctly calculated their (earth) age', function() {

    expect(Math.floor(Me.earthAge())).toEqual(34);

  });

  it('should test the mercuryAge() prototype gives the age in Mercury years of that person', function() {
    // For this and the following tests, comparing the output from person.js methods to the values given by entering my birthdate at https://theplanets.org/age-on-planets/
    expect(Me.mercuryAge()).toBeCloseTo(141.5, 1);

  });

  it('should test the venusAge() prototype for accuracy', function() {

    expect(Me.venusAge()).toBeCloseTo(null);

  });

  it('should test the marsAge() prototype for accuracy', function() {

    expect(Me.marsAge()).toBeCloseTo(null);

  });

  it('should test the jupiterAge() prototype for accuracy', function() {

    expect(Me.jupiterAge()).toBeCloseTo(null);

  });

  it('should test the saturnAge() prototype for accuracy', function() {

    expect(Me.saturnAge()).toBeCloseTo(null);

  });

  it('should test the neptuneAge() prototype for accuracy', function() {

    expect(Me.neptuneAge()).toBeCloseTo(null);

  });

  it('should test the uranusAge() prototype for accuracy', function() {

    expect(Me.uranusAge()).toBeCloseTo(null);

  });

});
