const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

exports.register =  (req, res) => {
   console.log(req.body);   
   const firstName = req.body.registerfname;
   const lastName = req.body.registerlname;
   const phone = req.body.phnum;
   const userId = req.body.userid;
   const password = req.body.userpass;
   const confirmPassword = req.body.confirmpass;
   db.query('SELECT user_id FROM users WHERE user_id = ?', userId, async (error, results) => {
      if(error) {
         console.log(error);
      }
      if (results.length > 0) {
         return res.render('index', {
            message: 'That user ID is already in use'
         })
      } else if ( password !== confirmPassword) {
         return res.render('index', {
            message: 'Passwords do not match'
         })
      }
      let hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);

      db.query("INSERT INTO users SET ?", {
         first_name: firstName,
         last_name: lastName, 
         user_id: userId, 
         password: hashedPassword,
         phone_no: phone
      }, (error, results) => {
         if (error) {
            console.log(error);
         } else {
            console.log(results);
            return res.render('index', {
               success_message: 'User registered'
            })
         }
      });
   });
}

exports.login = (req, res) => {
   console.log(req.body);
   const userId = req.body.userid;
   const password = req.body.userpass;

   db.query( 'SELECT * FROM users where user_id = ?',userId, async(error, result) => {
      if(error) {
         console.log(error);
      } else {
         if (result.length == 0) {
            return res.render('index', {
               login_message: 'User not found'
            })
         } else {
            const hashedPassword = result[0].password;

            if (await bcrypt.compare(password, hashedPassword)) {
               res.send(`${userId} is logged in!`);
            } else {
               return res.render('index', {
                  login_message: 'Password is incorrect'
               })
            }
         }
      }
   })
}
