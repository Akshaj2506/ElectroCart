const express = require('express');
const router = express.Router();
const mysql = require('mysql');

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
router.get('/payment', (req, res) => {
   res.render('payment.hbs');
})

router.get('/products/cable', (request, response, next) => {
   var sql = `select * from cable`;
   db.query(sql, (err,data,fields) => {
      if (err) throw err;
      response.render('products.ejs',{sendData: data, product: "cables"});
   })
})
router.get('/products/cameras', (request, response, next) => {
   var sql = `select * from cameras`;
   db.query(sql, (err,data,fields) => {
      if (err) throw err;
      response.render('products.ejs',{sendData: data, product: "cameras"});
   })
})
router.get('/products/cpu', (request, response, next) => {
   var sql = `select * from cpu`;
   db.query(sql, (err,data,fields) => {
      if (err) throw err;
      response.render('products.ejs',{sendData: data, product: "CPUs"});
   })
})
router.get('/products/headphones', (request, response, next) => {
   var sql = `select * from headphones`;
   db.query(sql, (err,data,fields) => {
      if (err) throw err;
      response.render('products.ejs',{sendData: data, product: "headphones"});
   })
})
router.get('/products/laptop', (request, response, next) => {
   var sql = `select * from laptop`;
   db.query(sql, (err,data,fields) => {
      if (err) throw err;
      response.render('products.ejs',{sendData: data, product: "laptop"});
   })
})
router.get('/products/mobile', (request, response, next) => {
   var sql = `select * from mobile`;
   db.query(sql, (err,data,fields) => {
      if (err) throw err;
      response.render('products.ejs',{sendData: data, product: "mobile"});
   })
})
router.get('/products/motherboard', (request, response, next) => {
   var sql = `select * from motherboard`;
   db.query(sql, (err,data,fields) => {
      if (err) throw err;
      response.render('products.ejs',{sendData: data, product: "motherboard"});
   })
})
router.get('/products/ram', (request, response, next) => {
   var sql = `select * from ram`;
   db.query(sql, (err,data,fields) => {
      if (err) throw err;
      response.render('products.ejs',{sendData: data, product: "RAMs"});
   })
})
router.get('/products/storage', (request, response, next) => {
   var sql = `select * from storage`;
   db.query(sql, (err,data,fields) => {
      if (err) throw err;
      response.render('products.ejs',{sendData: data, product: "storage"});
   })
})
router.get('/products/televisions', (request, response, next) => {
   var sql = `select * from televisions`;
   db.query(sql, (err,data,fields) => {
      if (err) throw err;
      response.render('products.ejs',{sendData: data, product: "televisions"});
   })
})

module.exports = router;