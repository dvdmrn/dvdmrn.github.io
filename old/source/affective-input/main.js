// global vars
var dragging = false, drawing = false, startPoint;
var svg = d3.select('body').append('svg');

var points = [], g;

// behaviors
var dragger = d3.behavior.drag()
    .on('drag', handleDrag)
    .on('dragend', function(d){
        dragging = false;
    });

svg.on('mouseup', function(){
    if(dragging) return;
    drawing = true;
    startPoint = [d3.mouse(this)[0], d3.mouse(this)[1]];
    if(svg.select('g.drawPoly').empty()) g = svg.append('g').attr('class', 'drawPoly');
    if(d3.event.target.hasAttribute('is-handle')) {
        closePolygon();
        return;
    };

    points.push(d3.mouse(this));
    g.select('polyline').remove();

    var polyline = g.append('polyline').attr('points', points)
                    .style('fill', 'none')
                    .attr('stroke', '#000');

    for(var i = 0; i < points.length; i++) {
        g.append('circle')
        .attr('cx', points[i][0])
        .attr('cy', points[i][1])
        .attr('r', 4)
        .attr('fill', 'yellow')
        .attr('stroke', '#000')
        .attr('is-handle', 'true')
        .style({cursor: 'pointer'});
    }
});

function closePolygon() {
    svg.select('g.drawPoly').remove();
    var g = svg.append('g');
    g.append('polygon')
    .attr('points', points)
    .attr('id',"theSVG")
    .style('fill', getRandomColor())
    .attr('opacity', 0.5);
    for(var i = 0; i < points.length; i++) {
        var circle = g.selectAll('circles')
        .data([points[i]])
        .enter()
        .append('circle')
        .attr('cx', points[i][0])
        .attr('cy', points[i][1])
        .attr('r', 4)
        .attr('fill', '#FDBC07')
        .attr('stroke', '#000')
        .attr('is-handle', 'true')
        .style({cursor: 'move'})
        .call(dragger);
    }
    points.splice(0);
    drawing = false;
}

svg.on('mousemove', function() {
    if(!drawing) return;
    var g = d3.select('g.drawPoly');
    g.select('line').remove();
    var line = g.append('line')
                .attr('x1', startPoint[0])
                .attr('y1', startPoint[1])
                .attr('x2', d3.mouse(this)[0] + 2)
                .attr('y2', d3.mouse(this)[1])
                .attr('stroke', '#53DBF3')
                .attr('stroke-width', 1);
})

function handleDrag() {
    if(drawing) return;
    var dragCircle = d3.select(this), newPoints = [], circle;
    dragging = true;
    var poly = d3.select(this.parentNode).select('polygon');
    var circles = d3.select(this.parentNode).selectAll('circle');
    dragCircle
    .attr('cx', d3.event.x)
    .attr('cy', d3.event.y);
    for (var i = 0; i < circles[0].length; i++) {
        circle = d3.select(circles[0][i]);
        newPoints.push([circle.attr('cx'), circle.attr('cy')]);
    }
    poly.attr('points', newPoints);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// ======================
// draw affect grid
// ======================


for (var i = 0; i < (49); i++) {
    let offset = 10+(i*10)
    svg.append("line")
                  .attr("x1", 10)
                  .attr("y1", offset)
                  .attr("x2", 490)
                  .attr("y2", offset)
                  .attr("class","fineLine")
    svg.append("line")
                  .attr("x1", offset)
                  .attr("y1", 10)
                  .attr("x2", offset)
                  .attr("y2", 490)
                  .attr("class","fineLine")
}

let tickSpacing=120;
let start = -1;
for (var i = 0; i < 5; i++) {
    let nextCoord = tickSpacing*i+10
    svg.append("text")
                  .attr("x",nextCoord)
                  .attr("y",280)
                  .attr("class","tickLabel")
                  .text(start+(0.5*i)==0? "" : start+(0.5*i))

    svg.append("line")
                .attr("x1",nextCoord)
                .attr("y1",250)
                .attr("x2",nextCoord)
                .attr("y2",260)
                .attr("class","tickLine")

    svg.append("text")
                  .attr("x",220)
                  .attr("y",nextCoord+5)
                  .attr("class","tickLabel")
                  .text(start+(0.5*i)==0? "" : -(start+(0.5*i)))

    svg.append("line")
                .attr("x1",250)
                .attr("y1",nextCoord)
                .attr("x2",240)
                .attr("y2",nextCoord)
                .attr("class","tickLine")
}

svg.append("line")
                  .attr("x1", 250)
                  .attr("y1", 10)
                  .attr("x2", 250)
                  .attr("y2", 490)
                  .attr("class","mainLine")

svg.append("line")
                  .attr("x1", 10)
                  .attr("y1", 250)
                  .attr("x2", 490)
                  .attr("y2", 250)
                  .attr("class","mainLine")

svg.append("text")
                  .attr("x",-75)
                  .attr("y",270)
                  .attr("transform", "rotate(-90)")
                  .text("urgency")
                  .attr("class","labelText")

svg.append("text")
                  .attr("x",390)
                  .attr("y",240)
                  .text("pleasantness")
                  .attr("class","labelText")

svg.append("text")
                  .attr("x",430)
                  .attr("y",30)
                  .attr("class","cognitiveAnchor")
                  .text("excited")

svg.append("text")
                  .attr("x",30)
                  .attr("y",30)
                  .attr("class","cognitiveAnchor")
                  .text("dread")

svg.append("text")
                  .attr("x",30)
                  .attr("y",480)
                  .attr("class","cognitiveAnchor")
                  .text("depressed")

svg.append("text")
                  .attr("x",430)
                  .attr("y",480)
                  .attr("class","cognitiveAnchor")
                  .text("relaxed")


function makeFileName(){
    let pid = document.getElementById("pidField").value
    let task = document.getElementById("taskField").value
    let date = new Date()
    date = date.toDateString() + date.getTime()
    return (pid+"-"+task+"-"+date+".svg")
}

function saveSvg(svgEl, name) {

    if(svg.selectAll('polygon')[0].length > 1){
      alert("warning: multiple polygons present! 😱")
    }
    
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">'+ svgData + '</svg>'], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
