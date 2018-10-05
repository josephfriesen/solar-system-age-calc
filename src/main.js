import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
let M = require('materialize-css');
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.js';
import './scss/styles.scss';
import { Person } from './js/person.js';

document.addEventListener('DOMContentLoaded', function() {
  const today = new Date();
  const calendar = document.querySelectorAll('.datepicker');

  M.Datepicker.init(calendar, {
    yearRange: [1930, 2018],
    defaultDate: today,
    maxDate: today,
    showClearBtn: true
  });
});

$(document).ready(function() {
  let User;
  $("#birthdate-button").click(function() {
    const birthdate = $("#birthdate").val();
    if (birthdate !== "") {
      const d = new Date(birthdate);
      User = new Person(d);
      $(".planets").toggleClass("hidden");
      $(".planets").toggleClass("flex");
    }
  });
  $("#mercury").click(function() {
    $(".overlay").show();
    $(".planet-label").text("Mercury");
    $(".planet-age").text(User.mercuryAge().toFixed(2));
    $(".expectancy").text(User.mercuryLifeLeft().toFixed(2));
  });
  $("#venus").click(function() {
    $(".overlay").show();
    $(".planet-label").text("Venus");
    $(".planet-age").text(User.venusAge().toFixed(2));
    $(".expectancy").text(User.venusLifeLeft().toFixed(2));
  });
  $("#earth").click(function() {
    $(".overlay").show();
    $(".planet-label").text("Earth");
    $(".planet-age").text(User.earthAge().toFixed(2));
    $(".expectancy").text(User.earthLifeLeft().toFixed(2));
  });
  $("#mars").click(function() {
    $(".overlay").show();
    $(".planet-label").text("Mars");
    $(".planet-age").text(User.marsAge().toFixed(2));
    $(".expectancy").text(User.marsLifeLeft().toFixed(2));
  });
  $("#jupiter").click(function() {
    $(".overlay").show();
    $(".planet-label").text("Jupiter");
    $(".planet-age").text(User.jupiterAge().toFixed(2));
    $(".expectancy").text(User.jupiterLifeLeft().toFixed(2));
  });
  $("#saturn").click(function() {
    $(".overlay").show();
    $(".planet-label").text("Saturn");
    $(".planet-age").text(User.saturnAge().toFixed(2));
    $(".expectancy").text(User.saturnLifeLeft().toFixed(2));
  });
  $("#neptune").click(function() {
    $(".overlay").show();
    $(".planet-label").text("Neptune");
    $(".planet-age").text(User.neptuneAge().toFixed(2));
    $(".expectancy").text(User.neptuneLifeLeft().toFixed(2));
  });
  $("#uranus").click(function() {
    $(".overlay").show();
    $(".planet-label").text("Uranus");
    $(".planet-age").text(User.uranusAge().toFixed(2));
    $(".expectancy").text(User.uranusLifeLeft().toFixed(2));
  });

  $("#close-overlay").click(function() {
    $(".overlay").hide();
  });
});
