'use-strict';

// declare your functions here...
function paragraphSelector() {
var element = $('p')
return element;
}

function lastImageSelector() {
  var pic = $('.pics img:last')
  return pic;
}

function ninjaBabySelector() {
  var ninja = $("#baby-ninja")
  return ninja;
}

function divSelector() {
var divs = $(".pics")
return divs;
}

function firstListItem() {
  var firstL = $('#pic-list li:first-child')
  return firstL;
}
