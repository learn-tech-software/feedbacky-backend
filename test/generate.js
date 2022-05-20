//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);


describe('Generate Script Tests', () => {

    describe('/GET test generate script file', () => {
        it('it should get http 200 status code and script file', (done) => {
            chai.request(server)
                .get('/form/generateScriptFiles/6286373e68a22c6ad04acc25')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('string');
                    done();
                });
        });
    });


});