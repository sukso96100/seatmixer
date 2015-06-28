var collapseToolbar;
var collapsePref;
var collapseSeats;

function setUpPage(){
  collapseToolbar = document.getElementById("toolbar")
  collapsePref = document.getElementById("pref")
  collapseSeats = document.getElementById("collapse-seats")

  // collapseToolbar.hide();
  // collapseSeats.hide;
  // collapsePref.show;
}

function togglePref(){
    collapseToolbar.toggle();
    collapseSeats.toggle();
    collapsePref.toggle();
}
