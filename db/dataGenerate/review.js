/* insert review (10000) fake data */

const faker = require ('faker');
const mysql = require('mysql');

const con = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  database : 'stay',
  port: '3306'
});

con.connect();

for( let i=0; i <10000; i++) {
  let randomDate = faker.date.past();
  let randomCommnet = faker.lorem.paragraph();

  let accuracy = Math.floor(Math.random()*6);
  let communication = Math.floor(Math.random()*6);
  let cleanliness = Math.floor(Math.random()*6);
  let location = Math.floor(Math.random()*6);
  let checkin = Math.floor(Math.random()*6);
  let value = Math.floor(Math.random()*6);
  let stay = Math.floor(Math.random()*10200) + 1

  const inputMessage = "INSERT INTO review set ?";
  const option = {
    comments:randomCommnet,
    rating_accuracy:accuracy,
    rating_communication:communication,
    rating_cleanliness:cleanliness,
    rating_location:location,
    rating_checkin:checkin,
    rating_value:value,
    stay:stay,
    review_date:randomDate,
  }

  con.query(inputMessage, option, (error, insertID) => {
    if (error) throw error;
    console.log(insertID)
  });
}

con.end();
