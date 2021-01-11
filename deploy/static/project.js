
// code here

    // your code here.

var canvas = document.getElementById("myCanvas");
    var img    = canvas.toDataURL("image/png");
    document.write('<img src="'+img+'"/>');

    var ctx = canvas.getContext("2d");
    var painting = document.getElementById("contenta");
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
    ctx.strokeStyle = '#000000';
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
    function myFunction(){
    var dataURL = canvas.toDataURL();
    alert(dataURL)
    $.ajax({
      type: "POST",
      url: "/ans",
      data: {
         string: "hi"
      }
    }).done(function(o) {
      console.log('saved');

      // If you want the file to be visible in the browser
      // - please modify the callback in javascript. All you
      // need is to return the url to the file, you just saved
      // and than put the image in your browser.
    });
};
alert("this works");


