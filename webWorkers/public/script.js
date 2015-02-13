"use strict"
var workers = [];
var results = [];
var resultCount = 0;

for(var i = 0; i < 4; i++){
  workers.push(new Worker('worker.js'));
}

for(var j = 0; j < workers.length; j++){

  workers[j].postMessage({message: 'hi there'});

  (function(j){

    workers[j].onmessage = function(e){
      resultCount++;
      results[j] = e.data.message;
      if(resultCount === workers.length){
        done();
      }
    }

  })(j);

}

var done = function(){
  console.log(results);
}