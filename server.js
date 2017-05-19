const jwt = require('jsonwebtoken');

const cors = require('cors');

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const config = require('dotenv').config().parsed;


const enviroment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[enviroment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Go Global';

if (!config.CLIENT_SECRET || !config.USERNAME || !config.PASSWORD) {
  throw 'Make sure you have a CLIENT_SECRET, USERNAME, and PASSWORD in your .env file';
}
app.set('secretKey', config.CLIENT_SECRET);
const token = jwt.sign('user', app.get('secretKey'));
console.log(token);


const checkAuth = (request, response, next) => {
  const token = request.body.token ||
  request.params.token ||
  request.headers.authorization;
  if (token) {
    jwt.verify(token, app.get('secretKey'), (error, decoded) => {
      if (error) {
        return response.status(403).send({
          success: false,
          message: 'You shall not pass',
        });
      } else {
        request.decoded = decoded;
        next();
      }
    });
  } else {
    return response.status(403).send({
      success: false,
      message: 'You are not authorized to hit this end point',
    });
  }
};

// get all the organizations
app.get('/api/v1/organizations', (request, response) => {
  const org = request.query.org;

  if (!org) {
    database('organizations').select()
    .then(organizations => response.status(200).json(organizations))
    .catch(err => response.status(404).send('Organizations could not be loaded'));
  } else {
    database('organizations').where('id', org).select()
    .then(organization => response.status(200).json(organization))
    .catch(err => response.status(404).send('That id is not here'));
  }
});
// get the locations
app.get('/api/v1/locations', (request, response) => {
  database('locations').select()
  .then(locations => response.status(200).json(locations))
  .catch(error => response.sendStatus(500).send('Internal Server Error'));
});

// get organization by id
app.get('/api/v1/organizations/:organization_id', (request, response) => {
  database('organizations').where('id', request.params.organization_id).select()
  .then(organizations => response.status(200).json(organizations))
  .catch(error => response.sendStatus(404).send('No organizations match'));
});

// get a location by id
app.get('/api/v1/locations/:location_id', (request, response) => {
  database('locations').where('id', request.params.location_id).select()
  .then(location => response.status(200).json(location))
  .catch(error => response.sendStatus(404).send('No locations match'));
});

// add an organization
app.post('/api/v1/organizations', checkAuth, (request, response) => {
  const { id, name, url } = request.body;
  const organization = { name, url };


  database('organizations').insert(organization)
  .then(() => {
    database('organizations').select()
    .then((organizations) => {
      return response.status(200).json(organizations);
    })
    .catch(error => {
      return response.status(422).send('Please enter a name and url for the organization');
    });
  });
});

// post a location
app.post('/api/v1/locations', checkAuth, (request, response) => {
  const validLocation = ['country', 'state', 'city', 'organization_id'].every(prop => request.body.hasOwnProperty(prop));
  const location = request.body;

  if (validLocation) {
    database('locations').insert(location, ['id', 'country', 'city', 'state'])
    .then(location => response.status(201).json(location[0]))
    .catch(error => response.sendStatus(422));
  } else {
    return response.sendStatus(422);
  }
});

// delete an organization
app.delete('/api/v1/organizations/:id', checkAuth, (request, response) => {
  const { id } = request.params;

  database('locations').where('organization_id', id).update({ organization_id: null })
  .then(() => {
    database('organizations').where('id', id).del()
    .then(() => {
      database('organizations').select()
      .then((organizations) => {
        return response.status(204).json(organizations);
      })
      .catch((error) => {
        console.error('Cannot delete organization', error);
        return response.status(422).send('Cannot delete this organization');
      });
    });
  });
});

// delete a location
app.delete('/api/v1/locations/:id', checkAuth, (request, response) => {
  const { id } = request.params;
  database('locations').where('id', id).del()
  .then(() => {
    database('locations').select()
    .then((locations) => {
      return response.status(204).json(locations);
    })
    .catch((error) => {
      console.error('Cannot delete location', error);
      return response.status(422).send('Cannot delete this location');
    });
  });
});

// put request to edit all of the request
app.put('/api/v1/organizations/:id/replace', (request, response) => {
  database('organizations').where('id', request.params.id)
  .update({
    name: request.body.name,
    url: request.body.url,
  })
  .then(() => {
    database('organizations').select()
    .then((organizations) => {
      return response.status(200).json(organizations);
    });
  });
});

// edit an organizations name
app.patch('/api/v1/organizations/:id/edit', checkAuth, (request, response) => {
  database('organizations').where('id', request.params.id)
  .update({
    name: request.body.name,
  })
  .then(() => {
    database('organizations').select()
    .then((organizations) => {
      return response.status(200).json(organizations);
    });
  });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
