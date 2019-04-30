const { Pool } = require('pg');
const connectionString = 'postgres://drcropgq:jyfG-N-tTL_PTQVnmDRRsNMmqlz_YolX@isilo.db.elephantsql.com:5432/drcropgq'


const connectToDb = () => {
  return new Pool({
    connectionString,
    max: 1
  });
}

module.exports = connectToDb;
