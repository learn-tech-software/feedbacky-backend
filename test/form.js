//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Form = require('../models/Form');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

let userToken = '';
let userId = '';
let formId = '';

describe('Form Tests', () => {

    describe('/POST Get User Token For Authorization', () => {
        it('it should get http 200 status code', (done) => {
            chai.request(server)
                .post('/user/login')
                .send({name: 'deneme', password: '111'})
                .end((err, res) => {
                    userToken = res.body.token;
                    userId = res.body.userId;
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('/GET Forms by user id', () => {
        it('it should get forms', (done) => {
            chai.request(server)
                .get('/form/getForms/' + userId)
                .set('Authorization', userToken)
                .end((err, res) => {
                    formId = res.body._id;
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body[0].should.have.property('name');
                    res.body[0].should.have.property('fieds');
                    res.body[0].should.have.property('userId');
                    done();
                });
        });
    });

    describe('/GET Form Answers', () => {
        it('it should get form answers', (done) => {
            chai.request(server)
                .get('/form/getFormAnswers/62860ace8575fc21292e43a2')
                .set('Authorization', userToken)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body[0].should.have.property('response');
                    res.body[0].should.have.property('userAgent');
                    res.body[0].should.have.property('formId');
                    done();
                });
        });
    });

    describe('/GET Form Answers Without User Token', () => {
        it('it should get form answers', (done) => {
            chai.request(server)
                .get('/form/getFormAnswers/62860ace8575fc21292e43a2')
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });

});