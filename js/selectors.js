'use-strict';

// declare your functions here...
function paragraphSelector () {
  var p_tag=$('p');//document.getElementByTagName("p");
  return p_tag;
}
function lastImageSelector() {
  var img_tag=$('img:last');
  return img_tag;
}
function ninjaBabySelector () {
  var img_=$('#baby-ninja');
  return img_;
}
function divSelector () {
  var divs=$('.pics');
  return divs;
}
function firstListItem () {
  var li=  $('.pics ul li:first-child') ;
  return li;
}
