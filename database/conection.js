const { Client } = require('pg')
const client = new Client({
  host : "localhost",
  user: "postgress",
  password:"",
  port:5432,
  database:"videos"
});
await client.connect()
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message)
await client.end()