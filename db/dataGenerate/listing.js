const faker = require ('faker');
const mysql = require('mysql');

const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Student111!',
  database : 'stay'
});

con.connect();

/* insert hosts (100) fake data */
for( let i=0; i <100; i++) {
  let randomName = faker.name.findName();
  const inputMessage = "INSERT INTO host (name) VALUES (?)"
  con.query(inputMessage, (randomName), (error, insertID) => {
    if (error) throw error;
    console.log(insertID)
  });

}

con.end();




