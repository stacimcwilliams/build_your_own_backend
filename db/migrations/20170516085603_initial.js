exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('organizations', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('url');

      table.timestamps();
    }),

    knex.schema.createTable('locations', (table) => {
      table.increments('id').primary();
      table.string('country');
      table.string('state');
      table.string('city')
      table.integer('organization_id').unsigned()
      table.foreign('organization_id')
        .references('organizations.id');

      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('locations'),
    knex.schema.dropTable('organizations')
  ]);
};
