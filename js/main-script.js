var parameters = {
    target: '#graphPlotter',
    data: [{
      fn: 'sin(x)', 
      color: 'red'
   }       
          ],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
  };
  
  function plot() {
    var f = document.querySelector("#function").value;
    var xMin = document.querySelector("#xMin").value;
    var xMax = document.querySelector("#xMax").value;
    var yMin = document.querySelector("#yMin").value;
    var yMax = document.querySelector("#yMax").value;
    var color = document.querySelector("#color").value;
    parameters.data[0].fn = f;
    parameters.xAxis.domain = [xMin, xMax];
    parameters.yAxis.domain = [yMin, yMax];
    parameters.data[0].color = color;
    functionPlot(parameters);
    stylePlot(parameters);
  }

  function stylePlot () {
    color = parameters.data[0].color;
    document.querySelector("#plot").style.borderColor = color;
    document.querySelector("#plotSettings").style.borderColor = color;
  }

  function styleTags () {
    var span = document.querySelector(".tag-box");
    console.log(span);
  }