const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const app = express();

const scriptName = require('C:\\Users\\Akshajarsh\\Documents\\GitHub\\SemIVProjectWeb\\public\\javascripts\\getProductName.js');
const productName = scriptName.productName;
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});
router.get('/',(req, res) => {
   res.render('index.hbs');
});
router.get('/add-product', (req, res) => {
   res.render('addProduct.hbs');
})
router.get('/contact',(req,res) => {
   res.render('contactus.hbs');
})
router.get('/home', (req, res) => {
   res.render('home.hbs');
})

router.get('/products', (request, response, next) => {
   var sql = `select * from cable`;
   db.query(sql, (err,data,fields) => {
      if (err) throw err;
      console.log(data);
      response.render('products.ejs',{sendData: data});
   })
})


module.exports = router;