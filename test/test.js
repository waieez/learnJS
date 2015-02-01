var should = require('chai').expect,// intentional
	request = require('supertest'),
	express = request('express'),
	app = require('../index');

describe('Routes', function (){

	it(' / returns ok', function (done){
		request(app)
			.get('/')
			.expect(200, done);
	});

});