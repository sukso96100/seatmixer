var collapseToolbar;
var collapsePref;
var collapseSeats;
var collapseExchange;

function setUpPage(){
  collapseToolbar = document.getElementById("toolbar")
  collapsePref = document.getElementById("pref")
  collapseSeats = document.getElementById("collapse-seats")
  collapseExchange = document.getElementById("exchange")

  // collapseToolbar.hide();
  // collapseSeats.hide;
  // collapsePref.show;
}

function togglePref(){
    collapseToolbar.toggle();
    collapseSeats.toggle();
    collapsePref.toggle();
}

function toggleSeatExchange(){
    collapseExchange.toggle();

}
