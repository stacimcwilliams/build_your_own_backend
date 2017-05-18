module.exports = {
  test: {
   client: 'pg',
   connection: process.env.DATABASE_URL || 'postgres://localhost/go_global_test',
   migrations: {
     directory: __dirname + '/db/migrations'
   },
   seeds: {
     directory: __dirname + '/db/seeds/test'
   }
 },
  development: {
    client: 'pg',
    connection: 'postgress://localhost/go_global',
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    }
  },
  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
