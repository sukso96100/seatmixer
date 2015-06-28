var WIDTH;
var HEIGHT;
var SEATCOUNT;
var ABOVETEXT;
var EXA;
var EXB;

function createTable(width,height){
    WIDTH = width;
    HEIGHT = height;
    var seats = 1;
    var table;
    table = '<paper-material z="1" class="abovetext">'+ABOVETEXT+'</paper-material><table style="width:100%">';
    for(i=0; i<height; i++){
        table = table + '<tr>';
        for(j=0; j<width; j++){
            table = table + '<td><paper-material><paper-button id="'+seats+'">?</paper-button></paper-material></td>';
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
            setTimeout(mixNow, 3000);
//            document.getElementById("info").innerHTML="3초후 섞인 자리가 나타납니다. 3초 기다려야 하시는 이유는 아실 필요 없음 ㅇㅅㅇ";
        }

        function mixNow(){

//                   document.getElementById("info").innerHTML="섞인 자리를 확인하세요!";
//                 변수 초기화
                var DuplicateCheckArray=[];
                var SeatArray=[];
                var DuplicateCheckBoolean;
                var random;

                DuplicateCheckArray = null;
                DuplicateCheckArray = [];
                SeatArray = null;
                SeatArray = [];
                DuplicateCheckBoolean = null;
                random = null;


                 console.log("mixNow function");


                 var loop = 1;
                 while(loop<=WIDTH*HEIGHT){
                  random = Math.floor((Math.random() * WIDTH * HEIGHT)+1); //난수 생성
                DuplicateCheckBoolean = isInArray(random, DuplicateCheckArray);

                if(DuplicateCheckBoolean==true){
                console.log("Duplicated!"+random.toString());
                }else{


                var Seat = document.getElementById(loop.toString());
                    if(Seat.innerHTML!="X"){
                        if(random<=SEATCOUNT){
                        Seat.innerHTML=random.toString();
                            DuplicateCheckArray.push(random);
                        }

                    }
                    loop++;
                }
                 }
                 setTimeout(function(){
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
    // console.log("Showing Toast Message");
    // var toast = document.getElementById("toast");
    // toast.setAttribute("text", textmsg);
    // toast.show();
  }

function toggleSettings(){
    document.getElementById("pref").toggle();
}

function setUpSeats(){
  togglePref(false);
ABOVETEXT = document.getElementById("abovetext").value;
WIDTH = document.getElementById("width").value;
HEIGHT = document.getElementById("height").value;
SEATCOUNT = document.getElementById("lastnum").value;
    createTable(WIDTH,HEIGHT);

}

function disableSeat(seatnum){
    var seatext = document.getElementById(seatnum.toString());
    if(seatext.innerHTML=="X"){
        console.log("enabling seat : "+seatnum.toString())
       seatext.innerHTML = "?";
       }else{
           console.log("disabling seat : "+seatnum.toString())
       seatext.innerHTML = "X";
       }
}

function exchangeSeat(target){
    var A;
    var B;
    if(EXA == undefined){
        EXA = target;
        A = document.getElementById(EXA.toString()).innerHTML;
    }else{
        EXB = target;
        B = document.getElementById(EXB.toString()).innerHTML;
        document.getElementById(EXA.toString()).innerHTML = B;
        document.getElementById(EXB.toString()).innerHTML = A;
        showToast("자리가 교환되었습니다:"+EXA.toString()+"<->"+EXB.toString());
        EXA = undefined;
        EXB = undefined;
    }
}
