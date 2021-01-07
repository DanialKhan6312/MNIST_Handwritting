var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var painting = document.getElementById("content");
var paintstyle = getComputedStyle(painting);
canvas.width = parseInt(paintstyle.getPropertyValue("width"));
canvas.height = parseInt(paintstyle.getPropertyValue("height"));
var mouse = {x:0, y:0};
canvas.addEventListener('mousemove', function(e){
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
}, false)
ctx.lineWidth = 10;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#FFFFFF';
canvas.addEventListener('mousedown',function(e){
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    canvas.addEventListener('mousemove',onPaint,false);
    }, false);
    canvas.addEventListener('mouseup',function(){
        canvas.removeEventListener('mousemove',onPaint,false);
    },false);
var onPaint = function() {
    ctx.lineTo(mouse.x,mouse.y);
    ctx.stroke();
};
