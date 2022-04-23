const express =  require('express');
const mysql = require('mysql');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const ejs = require('ejs');

dotenv.config( {path: './.env'});
app.use(express.urlencoded( { extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

app.set('view engine', 'ejs');
app.set('view engine','hbs');

db.connect( (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('MySQL Connected...');
  }
})
// Define routes
app.use('/', require('./routes/pages')); 
app.use('/auth', require('./routes/auth'));

app.listen(3000, () => {
  console.log("Server started on port 3000...");
});