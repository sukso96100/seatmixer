var dialogPref;
var collapseExchange;
var dialogInfo;

function setUpPage(){
  dialogPref = document.getElementById("pref")
  collapseExchange = document.getElementById("exchange")
  dialogInfo = document.getElementById("infomodal")
  togglePref()
  showToast("사용하시기 앞서, 설정 수정후 적용하여, 자리를 생성해 주세요.")
}

function togglePref(){
    dialogPref.opened=true;
}

function toggleSeatExchange(){
    collapseExchange.toggle();

}
