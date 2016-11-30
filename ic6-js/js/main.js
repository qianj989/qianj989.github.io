function mouseenter() {
    console.log('Mouse Entered.');
}

function mouseout() {
    console.log('Mouse Leave.');
}

$(document).ready(function() {
    $("#status").mouseenter(mouseenter);
    $("#status").mouseout(mouseout);
});

    $(function() {
        $("#toggle").click(function() {
        $('#emoji1').animate({left: '1000px'}, 500, callback);
        })
  }); 



// var clicked = false;

// $("#toggle").click(function() {
    
//   if (clicked == false) {
//   $("#status").html("Boom! Boom!");
//   $("#status").css("background-color", "white");
//   $("#status").css("font-color", "red");
//   $("#status").css("border", "none");
//   $("#toggle").html("Loading");
//   clicked = true;
//   } else {
//   $("#status").html("Emoji Time");
//   $("#status").css("background-color", "orange");
//   $("#toggle").html("Start");
//   clicked = false;
//   }
// });