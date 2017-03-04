'use-strict';

// declare your functions here...

function paragraphSelector(){
return $('p');
}

function lastImageSelector(){
  return $('img:last');
}

function ninjaBabySelector(){
  return $('#baby-ninja');
}

function divSelector(){
  return $('.pics');
}

function firstListItem(){
  return $('div.pics ul#pic-list li:first');
  // return $('ul#pic-list li:first'); this line also works insted of the line above
}
