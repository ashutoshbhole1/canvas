const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // accessing all the 2d context features


ctx.beginPath();
ctx.moveTo(50, 30); // Takes the cursor to this place x= 50 and y = 30

ctx.lineTo(100, 80); // start from x = 100 to y = 80
ctx.lineTo(130, 80);
ctx.lineTo(130, 130);
ctx.strokeStyle = "#fff"
// ctx.lineWidth= 2;
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.arc(50, 50, 50, 0, 7);  // x, y , start angle , end angle (360 or 7 or 2 PI)  
ctx.stroke(); // this makes















