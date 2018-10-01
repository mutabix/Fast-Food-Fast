import dotenv from 'dotenv';
import db from '../db/index';

dotenv.config();

let sqlQuery = `CREATE TABLE IF NOT EXISTS menu(id SERIAL NOT NULL PRIMARY KEY,meal VARCHAR(255) NOT NULL,
price INT NOT NULL, created_at TIMESTAMPTZ DEFAULT NOW(), updated_at TIMESTAMPTZ DEFAULT NOW())`;

if (process.env.NODE_ENV === 'test') {
  sqlQuery = `DROP TABLE IF EXISTS menu CASCADE; 
  CREATE TABLE IF NOT EXISTS menu(id SERIAL NOT NULL PRIMARY KEY,meal VARCHAR(255) NOT NULL,
  price INT NOT NULL, created_at TIMESTAMPTZ DEFAULT NOW(), updated_at TIMESTAMPTZ DEFAULT NOW())`;
}

// Create menu table in the database
db.query(sqlQuery, (err, res) => {
  if (err) {
    console.log(err);
    return res.status(500).json({
      status: 'fail',
      error: {
        message: 'An error occured while trying to create the menu table, please try again.',
      },
    });
  }
  // Menu table created
  console.log('Connection successful, menu table created');
  return true;
});