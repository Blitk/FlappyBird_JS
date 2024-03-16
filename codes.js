
function birdUp(){
  var x = parseInt($("#bird").css("margin-top"));
  if (x > 0) {
    x -= 68;
    x = (Math.round((x/1360)*100))+"%";
    $("#bird").css("margin-top", x);
  }
  birdDown();
}

async function birdDown(){

    if(parseInt($("#bird").css("margin-top")) < 476){
      await new Promise(r => setTimeout(r, 1000));
      var x = parseInt($("#bird").css("margin-top"));
      x += 68;
      x = (Math.round((x/1360)*100))+"%";
      $("#bird").css("margin-top", x);
    }

}

function moveBars(){
  var x = parseInt($(".obstaculocima").css("margin-left")) ;
  if (x > 0) {
    x -= 68;
    x = (Math.round((x/1360)*100))+"%";
    $(".obstaculocima").css("margin-left", x);
    $(".obstaculobaixo").css("margin-left", x);
    // await new Promise(c => setTimeout(c, 1000));
  }
  if(x <= 0){
    countScore();
    moveBarsToBegin()
    // await new Promise(d => setTimeout(d, 1000));
  }

}

function moveBarsToBegin(){
  var upDown = generateHeight();
  setBarHeight(upDown[0], upDown[1]);
  $(".obstaculocima").css("margin-left", "100%");
  $(".obstaculobaixo").css("margin-left", "100%");

}

function setBarHeight(up, down){
  $(".obstaculocima").css("height", up+"px");
  $(".obstaculobaixo").css("height", down+"px");
}

function generateHeight(){
  var up = 0;
  var down = 0;
  while(true){
    down = Math.floor(Math.random() * 642 );
    up = Math.floor(Math.random() * 642 );
    if((up + down) <= 500){
      break
    }
  }
  return [up, down];
}

function countScore(){
  var x = parseInt($("#score").text());
  $("#score").text(x +1);
}

function setEventsAtLoading(){
  $("body").on("keypress", function(){ birdUp()});
  moveBarsToBegin ();
  let x = async () =>{
    while(true){
      moveBars();
      await new Promise(c => setTimeout(c, 100));
    }
  }
  x();
}

window.onload = ()=>{
  setEventsAtLoading();
};
