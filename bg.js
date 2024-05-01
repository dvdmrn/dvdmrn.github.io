const canvas = document.createElement("canvas");
canvas.id = "bg";
document.body.appendChild(canvas)
// const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let time = Date.now();

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}

addEventListener("resize", resize);

// OLD
// function transform(x, y, time){
//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;
//     const dx = x - centerX;
//     const dy = y - centerY;
//     const dist = Math.sqrt(dx*dx + dy*dy);
//     const currAngle = Math.atan2(dy, dx)
//     const newAngle = currAngle + Math.pow(dist, 0.8) * time;
//     return([
//         centerX + Math.sin(newAngle) * dist,
//         centerY + Math.cos(newAngle) * dist
//     ])
// }


function transform(x, y, time){
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const dx = x - centerX;
    const dy = y - centerY;
    const dist = Math.sqrt(dx*dx + dy*dy);
    return([
        // V1
        // centerX + dx + Math.tan(dx * time / 2) * dist + Math.sin(dx*time) * 5,
        // centerY + dy + (Math.cos(dy * time / 2))

        // V2
        // centerX + dx + Math.sin(dx * time * 0.05) * dist,
        // centerY + dy

        // // // V3
        // centerX + dx + Math.sin(dy + time * 10) * dx/2,
        // centerY + dy

        // V4
        // centerX + dx,
        // centerY + dy

        // v5
        centerX + dx,
        // centerY + dy + Math.sin(dy + time * 100) * (dist + Math.sin(dx))/4
        centerY + dy + Math.sin(dy + time * 20) * 50
    ])
}

function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);

    const buffer = 300;

    for (let x = 0; x < canvas.width; x+=50) {
        for (let y = -buffer/2; y < canvas.height + buffer/2; y+=50) {
            // x/canvas.width*360
            ctx.fillStyle = `hsl(${222 + Math.sin(time * 20 + x/2000 + y/1000)*77},80%,30%)`;
            let trans = transform(x, y, time)
            ctx.fillRect(trans[0], trans[1], 2, 2)
        }    
        
    }
}

setInterval(()=>{
    time = Date.now() * 0.00001;
    draw();
}, 20)

resize();
draw();