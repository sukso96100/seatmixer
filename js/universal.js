var collapseToolbar;
var collapsePref;
var collapseSeats;

function setUpPage(){
  collapseToolbar = document.getElementById("toolbar")
  collapsePref = document.getElementById("pref")
  collapseSeats = document.getElementById("collapse-seats")

  collapseToolbar.hide();
  collapseSeats.hide;
  collapsePref.show;
}

function togglePref(ToggleBoolean){
  if(ToggleBoolean==true){
    collapseToolbar.hide();
    collapseSeats.hide();
    collapsePref.show();
  }else{
    collapseToolbar.show();
    collapseSeats.show();
    collapsePref.hide();
  }
}
