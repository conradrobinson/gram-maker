dims = []
let cId = ""
    cId = "cnvs"
    dims = [window.innerWidth, window.innerHeight]
let num = 15
    const urlSearchParams = new URLSearchParams(window.location.search);
    const settingsParams = Object.fromEntries(urlSearchParams.entries());
    if (Object.keys(settingsParams).length != 0) {
        num = settingsParams.points
    }


center = [dims[0]/2, dims[1]/2]
c = document.getElementById(cId);
c.width = dims[0];
c.height = dims[1];
canvas = c.getContext("2d")
radius = (Math.min(window.innerWidth, window.innerHeight)/2)-50
center = [dims[0]/2, dims[1]/2]
console.log(center)
points = []
for (let i = 0; i < num; i++) {
    angle = 360/num * i
    points.push([center[0] + (radius*Math.sin(radian(angle))), center[1] + (radius*Math.cos(radian(angle)))]);
}
canvas.fillStyle = "rgb(255, 255, 255)"
canvas.strokeStyle = "#FF00FF"

for (let i = 0; i < points.length; i++) {

    point(points[i][0], points[i][1], canvas)
}
points2 = points
for (let i = 0; i < points.length; i++) {
    for (let j = i+1; j < points.length; j++) {
        line(points[i][0], points[i][1], points[j][0], points[j][1], canvas)
        console.log("Tells me how many lines it actually draws")
    }
}
console.log("Least efficient would be " + num**2 + " or n^2 generally")



function point(x, y, canvas){
    canvas.fillRect(x-5,y-5,10,10);
  }
function line(x1, y1, x2, y2, canvas) {
    canvas.lineWidth = 1;
        canvas.beginPath();
    canvas.moveTo(x1, y1);
    canvas.lineTo(x2, y2);
    canvas.stroke(); 
}

  function radian(degrees) {
    return  degrees * Math.PI / 180
  }