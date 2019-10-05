/* insert stay (10200) fake data */
const mysql = require('mysql');

const con = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  database : 'stay',
  port: '3306'
});

con.connect();

for( let i=0; i <10200; i++) {
  let randomHost = Math.floor(Math.random()*100) + 1
  let randomCustomer = Math.floor(Math.random()*1000) + 1

  const inputMessage = "INSERT INTO stay set ?";
  const option = {host:randomHost, customer:randomCustomer}

  con.query(inputMessage, option, (error, insertID) => {
    if (error) throw error;
    console.log(insertID)
  });
}

con.end();
