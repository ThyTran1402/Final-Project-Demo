// Database code

const { Pool } = require("pg");

const pool = new Pool();

module.exports = {
  query: (text, params) => pool.query(text, params),
  connect: (text, params) => pool.connect(text, params),
};

// //
// // Connecting/querying examples
// //

// const { Pool, Client } = require('pg');
// require('dotenv').config();

// // pools will use environment variables
// // for connection information
// const pool = new Pool()

// pool.query('SELECT NOW()', (err, res) => {
//     // console.log(err, res.rows[0])
//     if (err) {
//         console.log(err.stack)
//     } else {
//         console.log(res.rows[0])
//     }
//     pool.end()
// });

// // async/await version
// (async () => {
//     const pool = new Pool()

//     // you can also use async/await
//     const res = await pool.query('SELECT NOW()')
//     console.log(res.rows[0])
//     await pool.end()
// })();

// // clients will also use environment variables
// // for connection information

// (async () => {
//     const client = new Client()
//     await client.connect()
//     const res = await client.query('SELECT NOW()')
//     console.log(res.rows[0])
//     await client.end()
// })();
