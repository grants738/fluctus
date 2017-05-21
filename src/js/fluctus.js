var unit = 100;
var canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;

function fluctus(element, color, zoom, delay, trans, h) {
    canvas = document.getElementById(element);
    canvas.width = document.documentElement.clientWidth;
    canvas.height = h; //80
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;

    draw(color, zoom, delay, trans);
}

function draw(color, zoom, delay, trans) {
    context.clearRect(0, 0, width, height);

    /*
     * MANIPULATE WAVE HERE
     */
    drawWave(color, trans, zoom, delay); //（fillcolor, alpha, zoom, delay）

    // Update the time and draw again
    draw.seconds = draw.seconds + .004;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 800000);
};

draw.seconds = 0;
draw.t = 0;

function drawWave(fillcolor, alpha, zoom, delay) {
    context.fillStyle = fillcolor;
    context.globalAlpha = alpha;

    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath()
    context.fill(); 
}

function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
}