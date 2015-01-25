(function (){

	console.log('setting up tests..')

	mocha.setup({
	  ui: 'bdd',
	  ignoreLeaks: true,
	  asyncOnly: true
	});

	window.expect = chai.expect;

  window.onload = function() {
    mocha.run();
  };

}());