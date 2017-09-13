const pgp = require('pg-promise')({}),
config = process.env.DATABASE_URL || 'postgres://andrewgottlieb@localhost:5432/opensponsorship',
db = pgp(config);

module.exports = db;