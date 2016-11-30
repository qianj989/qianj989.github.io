$("body").css("background-color", "grey");

var clicks = 0;

$("button").click(function() {
    clicks = clicks + 1;
    $("body").css("background-color", "yellow");
    console.log("hello world");
});

var counter = 0;

for (var i = 0; i < 50; i++) {
    counter++;
    console.log(counter);
    $("body").append("<div class='dot'></div>");
}

var counter = 0;

$(".dot").each(function() {
    counter++;
    console.log("found dot");
    //$(this).html(counter);
    
});

$(".dot").click(function() {
    if($(this).hasClass("green")) {
        $(this).removeClass("green");
    } else {
        $(this).addClass("green");
    }
    // $(this).toggleClass("green");
    
});