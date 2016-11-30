$('#left').click(function() {
    $('.box').animate({
        left: '-=40px',
        width: '-=5px',
        height: '-=5px'
    }, function() {
        
    });
    $('.emoji').animate({
        width: '-=5px',
        height: '-=5px'
    }, function() {
        
    });
});

$('#up').click(function() {
    $('.box').animate({
        top: '-=40px',
        opacity: '+=0.1'
    }, function() {
        
    });
});

$('#right').click(function() {
    $('.box').animate({
        left: '+=40px',
        width: '+=5px',
        height: '+=5px'
    }, function() {
        
    });
    $('.emoji').animate({
        width: '+=5px',
        height: '+=5px'
    }, function() {
        
    });
});

$('#down').click(function() {
    $('.box').animate({
        top: '+=40px',
        opacity: '-=0.1'
    }, function() {
        
    });
});