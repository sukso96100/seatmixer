var WIDTH;
var HEIGHT;
var SEATCOUNT;

function createTable(width,height){
    WIDTH = width;
    HEIGHT = height;
    var seats = 1;
    var table;
    table = '<table style="width:100%">';
    for(i=0; i<height; i++){
        table = table + '<tr>';
        for(j=0; j<width; j++){
            table = table + '<td><paper-shadow><core-menu-button><paper-button id="'+seats+'">'+seats+'</paper-button><core-dropdown class="dropdown" layered><core-menu><paper-item>자리교환</paper-item><paper-item>자리 사용/비사용</paper-item></core-menu></core-dropdown></core-menu-button></paper-shadow></td>';
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
                 while(loop<=SEATCOUNT){
                  random = Math.floor((Math.random() * SEATCOUNT)+1); //난수 생성
                DuplicateCheckBoolean = isInArray(random, DuplicateCheckArray);
                
                if(DuplicateCheckBoolean==true){
                console.log("Duplicated!"+random.toString());
                }else{
                     
                     DuplicateCheckArray.push(random);
                var Seat = document.getElementById(loop.toString());
                Seat.innerHTML=random.toString();
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
    console.log("Showing Toast Message");
    var toast = document.getElementById("toast");
    toast.setAttribute("text", textmsg);
    toast.show();
  }

function toggleSettings(){
    document.getElementById("pref").toggle();
}

function setUpSeats(){
WIDTH = document.getElementById("width").value;
HEIGHT = document.getElementById("height").value;
SEATCOUNT = document.getElementById("lastnum").value;
    createTable(WIDTH,HEIGHT);
}