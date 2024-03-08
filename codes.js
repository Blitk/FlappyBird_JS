
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
      await new Promise(r => setTimeout(r, 1500));
      var x = parseInt($("#bird").css("margin-top"));
      x += 68;
      x = (Math.round((x/1360)*100))+"%";
      $("#bird").css("margin-top", x);
    }

}

window.onload = ()=>{
  $("body").on("keypress", function(){ birdUp()});
};
