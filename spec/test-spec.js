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

    console.log(SomeDude);
    expect(SomeDude.birthdate).toEqual(RandomBirth.date);

  });

  it('should show that the birth year, month and day have all been read from the birthdate object and been recorded under the appropriate key', function() {

    expect(Me.year).toEqual(1984);
    expect(Me.month).toEqual(8);
    expect(Me.day).toEqual(3);

  });

  it('should show that the person object has correctly calculated their (earth) age', function() {

    console.log(SomeDude);
    console.log(SomeDude.earthAge());
    console.log(SomeDude.age);
    expect(Math.floor(Me.age)).toEqual(34);

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
