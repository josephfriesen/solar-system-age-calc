import { Person } from './../src/js/person.js';
import { RandomDate } from './../src/js/random-date.js';

describe('The "Person" object and its associated prototypes', function() {

  const today = new Date();

  beforeEach(function() {
    const SomeDude = new Person(new RandomDate());
    console.log(SomeDude);
  });

  // comment this first test out after, just checking that I understand how Date objects work.
  it('should give the test variable "today" as the current date', function() {

    expect(today.getDay()).toEqual(5); // is today Friday?
    expect(today.getDate()).toEqual(5); // is today the fifth?
    expect(today.getMonth()).toEqual(9); // is it October?
    expect(today.getFullYear()).toEqual(2018); // is it 2018?

  });

  it('should show that, given a specific birthdate, the Person object has correctly recorded that date as a value of the key "Person.birthdate"', function() {

    expect(SomeDude.birthdate).toEqual(today);

  });

  it('should show that the birth year, month and day have all been read from the birthdate object and been recorded under the appropriate key', function() {

    expect(SomeDude.year).toEqual(null);
    expect(SomeDude.month).toEqual(null);
    expect(SomeDude.day).toEqual(null);

  });

  it('should show that the person object has correctly calculated their (earth) age', function() {

    expect(SomeDude.age).toEqual(null);

  });

  it('should test that the method for each planet is scaling the age of that person correctly', function() {

    expect(SomeDude.mercuryAge()).toEqual(null);
    expect(SomeDude.venusAge()).toEqual(null);
    expect(SomeDude.marsAge()).toEqual(null);
    expect(SomeDude.jupiterAge()).toEqual(null);
    expect(SomeDude.saturnAge()).toEqual(null);
    expect(SomeDude.neptuneAge()).toEqual(null);
    expect(SomeDude.uranusAge()).toEqual(null);

  });

});
