const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const enviroment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[enviroment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Go Global';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get all the organizations
app.get('/api/v1/organizations', (request, response) => {
  const org = request.query.org;

  if(!org) {
    database('organizations').select()
    .then(organizations => response.status(200).json(organizations))
    .catch(err => response.status(404).send('Organizations could not be loaded'));
  } else {
    database('organizations').where('id', org).select()
    .then(organization => response.status(200).json(organization))
    .catch(err => response.status(404).send('That id is not here'));
  }
});
//get the locations
app.get('/api/v1/locations', (request, response) => {
  database('locations').select()
  .then(locations => response.status(200).json(locations))
  .catch(error => response.sendStatus(500));
});

//get organization by id
app.get('/api/v1/organizations/:organization_id', (request, response) => {
  database('organizations').where('id', request.params.organization_id).select()
  .then(organizations => response.status(200).json(organizations))
  .catch(error => response.sendStatus(404));
});

//get a location by id
app.get('/api/v1/locations/:location_id', (request, response) => {
  database('locations').where('id', request.params.location_id).select()
  .then(location => response.status(200).json(location))
  .catch(error => response.sendStatus(404));
});

//add an organization
app.post('/api/v1/organizations', (request, response) => {
  const { id, name, url } = request.body
  const organization = { name, url };


  database('organizations').insert(organization)
  .then(() => {
    database('organizations').select()
    .then((organizations) => {
      response.status(200).json(organizations)
    })
    .catch(error => {
      console.log('Could not add organization', error);
      response.status(422).send('Please enter a name and url for the organization')
    });
  });
});

//post a location
app.post('/api/v1/locations', (request, response) => {
  const validLocation = ['country', 'state', 'city', 'organization_id'].every(prop => request.body.hasOwnProperty(prop));
  const location = request.body

  if(validLocation) {
    database('locations').insert(location, ['id', 'country', 'city', 'state'])
    .then(location => response.status(201).json(location[0]))
    .catch(error => response.sendStatus(422));
  } else {
    response.sendStatus(422);
  }
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
