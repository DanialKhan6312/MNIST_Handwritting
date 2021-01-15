
// code here

    // your code here.

var canvas = document.getElementById("myCanvas");
    var img    = canvas.toDataURL("image/jpg");
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
    ctx.lineWidth = 25;
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
    function clearbut(){
    var canvas= document.getElementById('myCanvas'),
        ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

    function myFunction(){
    var dataURL = canvas.toDataURL('img/jpg');
    $.ajax({
      type: "POST",
      url: "/ans",
      data: {
         base64: dataURL
      },
       success: function(data, status, settings)
            {
               alert("You drew a "+data);
            },
       error: function(ajaxrequest, ajaxOptions, thrownError)
            {
            alert("error")
            }
    }).done(function(o) {
      alert("yay");

      // If you want the file to be visible in the browser
      // - please modify the callback in javascript. All you
      // need is to return the url to the file, you just saved
      // and than put the image in your browser.
    });
};



