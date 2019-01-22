/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Invul naam*/

var zoekknop = document.querySelector('.zoekImg');
var uitschuif = document.querySelector('.zoeken');

function show() {
    uitschuif.classList.toggle('zichtbaar');
}

zoekknop.addEventListener('click', show);


function downloadFunction() {
  var bericht = document.getElementById("mijnPopup");
  bericht.classList.toggle("show");
}



