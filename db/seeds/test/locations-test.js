
const data = require("../../../orglocdata.json");

function createOrganization(knex, org) {
  return knex('organizations').insert(org);
}

function createLocations(knex, loc) {
  return knex('locations').insert(loc);
}

exports.seed = (knex, Promise) => {
  return knex('locations').del()
  .then(() => knex('organizations').del())
  .then(() => {
    const orgPromises = [];

    data.organizations.forEach((org) => {
      orgPromises.push(createOrganization(knex, org));
    });
    return Promise.all(orgPromises);
  })
  .then(() => {
    const locPromises = [];

    data.locations.forEach((loc) => {
      locPromises.push(createLocations(knex, loc));
    });
    return Promise.all(locPromises);
  })
  .catch(error => {
    console.log(error);
  });
};
