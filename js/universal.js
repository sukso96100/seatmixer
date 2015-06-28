var collapse-toolbar = document.getElementById("toolbar")
var collapse-pref = document.getElementById('pref')
var collapse-seats = document.getElementById('collapse-seats')

function setUpPage(){

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
