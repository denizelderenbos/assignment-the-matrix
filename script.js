let matrix = [
  [11975, 5871, 8916, 2868],
  [1951, 10048, 2060, 6171],
  [8010, 16145, 8090, 8045],
  [1013, 990, 940, 6907]
];

let canvas = d3.select("#canvas");

let table = canvas.append("table");

table
  .selectAll("tr")
  .data(matrix)
  .enter().append("tr")
    .on("mouseover", handleMouseOverTr)
        .selectAll("td")
        .data(function(d){return d;})
        .enter().append('td')
          .text(function(d){return d;})
          .on("mouseover", handleMouseOverTd)

let td = d3.select("td");

function handleMouseOverTr() {
  d3.select(this).style('background', 'purple');
}

function handleMouseOverTd() {
  d3.select(this).style('background', 'pink');
}
