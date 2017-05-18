process.env.NODE_ENV = 'test';

const environment = 'test'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../server')

chai.use(chaiHttp)

describe('Go Global server testing', () => {
  before((done) => {
    database.migrate.latest()
    .then(() => {
      done();
    });
  });



  describe('API routes', () => {

    describe('GET /api/v1/organizations', () => {
      it('should return all organizations', (done) => {
        chai.request(server)
        .get('/api/v1/organizations')
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.should.have.length(30);
          response.body[0].should.have.property('name');
          response.body[0].should.have.property('url');
          done();
        });
      });
    });

    describe('GET /api/v1/locations', () => {
      it('should return all locations', (done) => {
        chai.request(server)
        .get('/api/v1/locations')
        .end((error,response) => {
          response.should.have.status(200)
          response.should.be.json
          response.body.should.be.a('array')
          response.body[0].should.have.property('country');
          response.body[0].should.have.property('state');
          response.body[0].should.have.property('city');
          done()
        })
      })
    }),

    describe('GET /api/v1/organizations/:organization_id', () => {
      it('should return one organization with an id', (done) => {
        chai.request(server)
        .get('/api/v1/organizations/1')
        .end((error,response) => {
          console.log(response.body[0]);
          response.should.be.json;
          // response.body.should.be.a('array');
          // response.body.should.have.length(1);
          response.body[0].should.have.property('name');
          // response.body[0].title.should.equal('url');
          done()
        })
      })
    });
  });
});
