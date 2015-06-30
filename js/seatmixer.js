var WIDTH;
var HEIGHT;
var ABOVETEXT;
var PEOPLELIST;
var UNUSEDSEATS;

var dialogPref;
var collapseExchange;
var dialogInfo;
var mixing;

function createTable(width,height){
    WIDTH = width;
    HEIGHT = height;
    var seats = 1;
    var table;
    table = '<paper-material z="1" class="abovetext">'+ABOVETEXT+'</paper-material><table style="width:100%">';
    for(i=0; i<height; i++){
        table = table + '<tr>';
        for(j=0; j<width; j++){
            table = table + '<td><paper-material style="padding:4px;"><p style="font-size:12px;"><b>'+seats+'</b></p><p style="font-size:20px;" id="'+seats+'">?</p></paper-material></td>';
            seats++;
            }
        table = table + '</tr>';
        }
    table = table + '</table>';
    var area = document.getElementById("seats");
    area.innerHTML = table;
}


function startTask(){
            showToast("자리 섞기를 시작합니다")
            mixing.opened=true;
            setTimeout(mixNow, 3000);
//            document.getElementById("info").innerHTML="3초후 섞인 자리가 나타납니다. 3초 기다려야 하시는 이유는 아실 필요 없음 ㅇㅅㅇ";
        }

        function mixNow(){

                var PeopleArray;
                var FilledSeats;

                PeopleArray = JSON.parse("[" + PEOPLELIST + "]");
                FilledSeats = JSON.parse("[" + UNUSEDSEATS + "]");

                console.log(PeopleArray);
                console.log(FilledSeats);

                var DuplicateCheckBoolean;
                var random;


                DuplicateCheckBoolean = null;
                random = null;


                 console.log("mixNow function");
                for(var i=1; i<=WIDTH*HEIGHT;i++){
                  var Seat = document.getElementById(i.toString());
                  Seat.innerHTML="";
                }

                for(var i=0; i<PeopleArray.length; i++){
                  DuplicateCheckBoolean = true;
                  while (DuplicateCheckBoolean==true) {
                    random = Math.floor((Math.random() * WIDTH * HEIGHT)+1); //난수 생성
                    DuplicateCheckBoolean = isInArray(random, FilledSeats)
                  }
                  var Seat = document.getElementById(random.toString());
                  Seat.innerHTML=PeopleArray[i];
                  FilledSeats.push(random);
                }

                 setTimeout(function(){
                   mixing.opened=false;
                     showToast("자리 섞기가 끝났습니다. 변경된 자리를 확인하세요.")
                 },1000);


            }

        function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

        function href(target){
    location.href = target.toString()
}

        function showToast(textmsg) {
    console.log("Showing Toast Message");
    var toast = document.getElementById("toast");
    toast.setAttribute("text", textmsg);
    toast.show();
  }

function toggleSettings(){
    document.getElementById("pref").toggle();
}

function setUpSeats(){
  togglePref();
ABOVETEXT = document.getElementById("abovetext").value;
WIDTH = document.getElementById("width").value;
HEIGHT = document.getElementById("height").value;
PEOPLELIST = document.getElementById("list").value;
UNUSEDSEATS = document.getElementById("unused").value;
    createTable(WIDTH,HEIGHT);

}



function exchangeSeat(){
  var SeatANum = document.getElementById("seata").value;
  var SeatBNum = document.getElementById("seatb").value;
  var SeatA = document.getElementById(SeatANum.toString());
  var SeatB = document.getElementById(SeatBNum.toString());
  var A = SeatA.innerHTML.toString();
  var B = SeatB.innerHTML.toString();
  SeatA.innerHTML = B;
  SeatB.innerHTML = A;
  showToast("자리 교환됨 : "+SeatANum+"="+A+","+SeatBNum+"="+B+" -> "+SeatANum+"="+B+","+SeatBNum+"="+A)
}

function setUpPage(){
  dialogPref = document.getElementById("pref")
  collapseExchange = document.getElementById("exchange")
  dialogInfo = document.getElementById("infomodal")
  mixing = document.getElementById("mixing")
  togglePref()
  showToast("사용하시기 앞서, 설정 수정후 적용하여, 자리를 생성해 주세요.")
}

function togglePref(){
    dialogPref.opened=true;
}

function toggleSeatExchange(){
    collapseExchange.toggle();

}
