const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const minX = 100;
const rangeX = 400;
let p = 0;
let sign = 1;
let minRad = 25;
let rangeRad = 50;


animate();

function animate() {
    const x = minX + rangeX * p;
    const rad = minRad + rangeRad*Math.sin(p*Math.PI); // animates the circle in bouncing effect

    p = p + 0.02 * sign;

    if (p > 1 || p < 0) {
        sign = sign * -1;  // changes the sign so that the direction is within the rectangle
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, 300, rad, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = '#6320ff';
    ctx.fillStyle = '#9c72ff';
    ctx.fill();
    ctx.stroke();

    requestAnimationFrame(animate);
};

