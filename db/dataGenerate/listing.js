const faker = require ('faker');
const mysql = require('mysql');

const con = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  database : 'stay',
  port: '3306'
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




