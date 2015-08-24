var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(200,150,150,75);

ctx.beginPath();
ctx.arc(275,187.5,37,0,2*Math.PI);
ctx.stroke();

ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("$$$",250,198);
