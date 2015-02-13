onmessage = function(e){

  console.log(e.data.message);

  var message = {message:'hi dere'};
  postMessage(message);
}