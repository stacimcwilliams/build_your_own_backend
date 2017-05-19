process.env.NODE_ENV = 'test';

const environment = 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);
const chai = require('chai');

const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('Go Global server testing', () => {
  before((done) => {
    database.migrate.latest()
    .then(() => {
      return database.seed.run();
    })
    .then(() => {
      done();
    });
  });

  beforeEach((done) => {
    database.seed.run()
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
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.have.length(30);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body[0].should.have.property('country');
          response.body[0].should.have.property('state');
          response.body[0].should.have.property('city');
          done();
        });
      });
    });

    describe('GET /api/v1/organizations/:organization_id', () => {
      it('should return one organization with an id', (done) => {
        chai.request(server)
        .get('/api/v1/organizations/1')
        .end((error, response) => {
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.should.have.length(1);
          response.body[0].should.have.property('name');
          response.body[0].should.have.property('url');
          done();
        });
      });
    });

    describe('GET /api/v1/locations/:location_id', () => {
      it('should return one location with an id', (done) => {
        chai.request(server)
        .get('/api/v1/locations/1')
        .end((error, response) => {
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.should.have.length(1);
          response.body[0].should.have.property('country');
          response.body[0].should.have.property('state');
          response.body[0].should.have.property('city');
          done();
        });
      });
    });

    describe('POST /api/v1/organizations/', () => {
      it('should not add an organization if not authorized', (done) => {
        chai.request(server)
        .post('/api/v1/organizations')
        .send({
          name: "Teach for America",
          url: "http://www,teachforamerica.com",
        })
        .end((error, response) => {
          response.should.have.status(403);
          response.body.should.be.a('object');
          done();
        });
      });
    });

    describe('Sad Route', () => {
      it('should return a 404 for a sad route', (done) => {
        chai.request(server)
        .get('/api/v1/organizations/sad')
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
      });

      it('should return status 404 when no organizations match', (done) => {
        chai.request(server)
        .get('/api/v1/organziations/593s')
        .end((error, response) => {
          response.should.have.status(404);
          done();
        });
      });

      it('should return status 404 when no locations match', (done) => {
        chai.request(server)
        .get('/api/v1/organziations/964f')
        .end((error, response) => {
          response.should.have.status(404);
          done();
        });
      });
    });

    describe('PATCH /api/v1/organizations/:id/edit', () => {
      it('should be able to PATCH a specific organization', (done) => {
        chai.request(server)
        .get('/api/v1/organizations/1')
        .set('Authorization', process.env.TOKEN)
        .end((error, response) => {
          response.body[0].should.have.property('name');
          response.body[0].name.should.equal('Go Eco');
          response.body[0].id.should.equal(1);
          chai.request(server)
          .patch('api/v1/organizations/1/edit')
          .set('Authorization', process.env.TOKEN)
          .send({
            name: 'Changing name to Go Go Eco',
          })
          .end((error, response) => {
            response.should.have.status(200);
            response.body.name.should.equal('Changing name to Go Go Eco');
            response.body.id.should.equal(1);
          });
          done();
        });
      });
    });

    describe('PUT /api/v1/organizations/:id/replace', () => {
      it('should be able to PUT a specific organization', (done) => {
        chai.request(server)
        .get('/api/v1/organizations/3')
        .set('Authorization', process.env.TOKEN)
        .end((error, response) => {
          response.body[0].should.have.property('name');
          response.body[0].name.should.equal('One World 365');
          chai.request(server)
          .put('api/v1/organizations/3/replace')
          .set('Authorization', process.env.TOKEN)
          .send({
            name: "Change this entire org",
            url: "http://www.neworg.com",
          })
          .end((error, response) => {
            response.should.have.status(200);
            response.body.name.should.equal("Change this entire org");
            response.body.url.should.equal("http://www.neworg.com");
            response.body.id.should.equal(3);
          });
          done();
        });
      });
    });

    describe('DELETE /api/v1/locations/:id', () => {
      it('should be able to delete a location', (done) => {
        chai.request(server)
        .get('/api/v1/locations/')
        .end((error, response) => {
          response.body.length.should.equal(30);
          chai.request(server)
          .delete('api/v1/locations/2')
          .set('Authorization', process.env.TOKEN)
          .end((error, response) => {
            response.should.have.status(204);
            chai.request(server)
            .get('/api/v1/locations')
            .end((error, response) => {
              response.body.length.should.equal(29);
            });
          });
          done();
        });
      });
    });

    describe('DELETE /api/v1/organizations/:id', () => {
      it('should be able to delete a organization', (done) => {
        chai.request(server)
        .get('/api/v1/organizations/')
        .end((error, response) => {
          response.body.length.should.equal(30);
          chai.request(server)
          .delete('api/v1/organizations/2')
          .set('Authorization', process.env.TOKEN)
          .end((error, response) => {
            response.should.have.status(204);
            chai.request(server)
            .get('/api/v1/organizations')
            .end((error, response) => {
              response.body.length.should.equal(29);
            });
          });
          done();
        });
      });
    });

    describe('POST /api/v1/locations', () => {
      it('should not create a record with data missing', (done) => {
        chai.request(server)
          .post('api/v1/locations')
          .set('Authorization', process.env.TOKEN)
          .send({
            country: "Thailand",
          })
          .end((error, response) => {
            response.should.have.status(422);
          });
        done();
      });

    });
  });
});
