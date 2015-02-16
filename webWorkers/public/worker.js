onmessage = function(e){

  var row = e.data.row;
  var col = e.data.col;

  console.log(row, col);

  var message = {result: ['soltuion']};
  postMessage(message);
}