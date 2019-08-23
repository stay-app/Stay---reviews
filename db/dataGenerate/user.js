/* insert customer (600) fake data */
const faker = require ('faker');
const mysql = require('mysql');

const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Student111!',
  database : 'stay'
});

con.connect();

for( let i=0; i <600; i++) {
  let randomName = faker.name.findName();
  let randomrawprofile = faker.image.avatar();

  const inputMessage = "INSERT INTO customer set ?";
  const option = {name:randomName, profile:randomrawprofile}

  con.query(inputMessage, option, (error, insertID) => {
    if (error) throw error;
    console.log(insertID)
  });
}

con.end();
