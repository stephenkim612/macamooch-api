const postgres = require('pg')
const { Pool } = postgres;


const PG_URI = `postgres://qksyebzl:1qcAurdIPN2zLDom9JeqKETm5hMTtsI8@mahmud.db.elephantsql.com/qksyebzl`

const pool = new Pool({
    connectionString: PG_URI
});

module.exports =
{
  query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
  }
};