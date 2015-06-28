var collapse-toolbar = document.getElementById("toolbar")
var collapse-pref = document.getElementById('pref')
var collapse-seats = document.getElementById('collapse-seats')

function setupPage(){

  collapse-toolbar.opened = false;
  collapse-seats.opened = false;
  collapse-pref.toggle();
}
