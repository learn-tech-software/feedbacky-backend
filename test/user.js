//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let User = require('../models/User');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

let userToken = '';

describe('User Tests', () => {

    describe('/POST Login User Trying With Wrong Username and Password', () => {
        it('it should get http 401 status code', (done) => {
            chai.request(server)
                .post('/user/login')
                .send({name: 'deneme', password: '1111'})
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });

    describe('/POST Login User Trying With Correct Username and Password', () => {
        it('it should get http 200 status code', (done) => {
            chai.request(server)
                .post('/user/login')
                .send({name: 'deneme', password: '111'})
                .end((err, res) => {
                    res.should.have.status(200);
                    userToken = res.body.token;
                    res.body.should.have.property('token');
                    res.body.should.have.property('userId');
                    done();
                });
        });
    });

    describe('/GET User Details', () => {
        it('it should get user details', (done) => {
            chai.request(server)
                .get('/user/getDetails')
                .set('Authorization', userToken)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('users');
                    done();
                });
        });
    });

});