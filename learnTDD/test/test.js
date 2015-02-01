(function () {
	'use strict'

	describe('Basic Mocha/Chai Testing Framework', function (){

		it('should should have a failing test', function (done) {
			expect(true).to.equal(false);
			done();
		});

		it('should equal hello', function (done){
			var hello = 'hello';
			expect(hello).to.equal('hello');
			done();
		});
	});

	describe('Exports', function(){

		it('should have access to exported APP object', function (done){
			expect(APP).to.be.an('object');
			expect(APP).to.not.equal(undefined);
			done();
		});

		it('should not have access to private methods', function (done){
			var privateFunc = APP.privateFunc;
			expect(privateFunc).to.equal(undefined);
			done();
		});

		it('should have access to public methods', function (done){
			var result = APP.publicFunc();
			expect(result).to.equal("I'm super public");
			done();
		});

		it('should have access to private methods and variables via getters', function (done){
			var result = APP.getPrivate();
			expect(result).to.equal("I'm super private");
			done();
		});

	});

})();