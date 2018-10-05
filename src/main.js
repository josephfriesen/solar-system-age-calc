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
    const d = new Date(birthdate);
    User = new Person(d);
    $(".planets").slideDown();
  });

});
