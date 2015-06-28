var collapse-toolbar;
var collapse-pref;
var collapse-seats;

function setUpPage(){
  collapse-toolbar = document.getElementById("toolbar")
  collapse-pref = document.getElementById('pref')
  collapse-seats = document.getElementById('collapse-seats')

  collapse-toolbar.hide();
  collapse-seats.hide;
  collapse-pref.show;
}

function togglePref(ToggleBoolean){
  if(ToggleBoolean==true){
    collapse-toolbar.hide();
    collapse-seats.hide();
    collapse-pref.show();
  }else{
    collapse-toolbar.show();
    collapse-seats.show();
    collapse-pref.hide();
  }
}
