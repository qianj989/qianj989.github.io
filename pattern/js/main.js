$("body").css("background-color", "orange");

for (var i=0; i < 100; i++ ) {
    $("body").append("<div class='dot'></div>");

}

var visibility = 0;
var myCounter = 1;

var emoji = ["img/emoji1.png","img/emoji2.png","img/emoji3.png","img/emoji4.png","img/emoji5.png","img/emoji6.png","img/emoji7.png","img/emoji8.jpg","img/emoji9.png","img/emoji10.png","img/emoji11.png","img/emoji12.png","img/emoji13.jpg"];

emoji[Math.floor(Math.random()*emoji.length)];

$("body").append("<img class='emoji' src='" + emoji[Math.floor(Math.random()*13)] + "'>")

$(".dot").each(function() {
    $(this).css("opacity", visibility/100);
//$(this).html(myCounter);
    $(this).css("height",myCounter +10);
    $(this).css("width",myCounter +10);
    $(this).css("top",Math.floor(Math.random()*$(window).height()));
    $(this).css("left",Math.floor(Math.random()*$(window).width()));
   $(this).css("font-size",Math.floor(Math.random()*$(window).width()));
    myCounter++;
    visibility++;
});

$(".emoji").each(function(){
    $(this).css("width", "100px");
    //$(this).html(myCounter);
    $(this).css("top",Math.floor(Math.random()*$(window).height()));
    $(this).css("left",Math.floor(Math.random()*$(window).width()));
});


$(".emoji").click(function() {
    $(this).toggleClass("emoji_1");
    
});