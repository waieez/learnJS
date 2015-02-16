(function(){

  var generateData = function (days){
    var data = [];
    var dailyData;
    
    var startingDate = new Date(2015, 2, 16);
    var year = startingDate.getFullYear();
    var month = startingDate.getMonth();
    var date = startingDate.getDate();

    for(var i = 0; i < days; i++){
      dailyData = {};
      dailyData.date = new Date(year, month, date+i);
      dailyData.data = Math.round(Math.random()*300);
      data.push(dailyData);
    }
    return data;    
  }

  var sortData = function(data, cb){
    var sorted = data.slice();;
    sorted.sort(cb);
    return sorted;
  }

  var days = 10;
  var data = generateData(days);
  var sorted = sortData(data, function (a, b){
    return a.data - b.data;
  });

  var config = {
    data: {min: sorted[0].data, max: sorted[days-1].data},
    date: {min: data[0].date, max: data[days-1].date},
    width: 500,
    height: 500,
    margin: {top: 30, right: 10, bottom: 40, left: 60}
  };

  var vis = d3.select('#metrics').append("svg")
      .data(data)
      .attr('class', 'metrics-container')
      .attr('width', config.width + config.margin.left + config.margin.right)
      .attr('height', config.height + config.margin.top + config.margin.bottom)
    .append('g')
      .attr('transform', "translate("+ config.margin.left +","+ config.margin.top +")");

  var y = d3.scale.linear()
      .domain([config.data.min * 0.9, config.data.max * 1.1])
      .range([config.height, 0])

  var x = d3.time.scale()
      .domain([config.date.min, config.date.max])
      .range([0, config.width])

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom')
      .ticks(5);

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient('left')
      .ticks(5);

  vis.append('g')
      .attr('class', 'axis')
      .call(yAxis);

  vis.append('g')
      .attr('class', 'axis')
      .attr('transform','translate(0,'+config.height+')')
      .call(xAxis);


  var line = d3.svg.line()
      .x(function (d) { return x(d.date) })
      .y(function (d) { return y(d.data) })

  vis.append('svg:path')
      .attr('d', line(data))
      .style('stroke', function(){
        return '#000000';
      })
      .style('fill', 'none')
      .style('stroke-width', '2.5')
})()