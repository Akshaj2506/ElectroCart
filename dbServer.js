require("dotenv").config()
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT

const express = require("express")
const app = express()
const mysql = require("mysql")
const db = mysql.createPool({
   connectionLimit: 100,
   host: "127.0.0.1",       //This is your localhost IP
   user: "root",
   password: "",  // password for the new user
   database: "electrocart",      // Database name
   port: "3306"             // port name, "3306" by default
})
db.getConnection( (err, connection)=> {
   if (err) throw (err)
   console.log ("DB connected successful: " + connection.threadId)
})

const port = process.env.PORT

app.listen(port,
   () => console.log(`Server started on port ${port}...`)
)
const bcrypt = require("bcrypt")

app.use(express.json())

app.post("/createUser",async (req,res) => {
   const firstName = req.body.fname;
   const lastName = req.body.lname;
   const phoneNum = req.body.telnum;
   const userId = req.body.user_id;
   const hashedPassword = await bcrypt.hash(req.body.password,10);

   db.getConnection( async (err, connection) => {
      if (err) throw (err)

      const sqlSearch = "SELECT * FROM users WHERE user_id = ?"
      const search_query = mysql.format(sqlSearch,[userId])

      const sqlInsert = "INSERT INTO users VALUES (?,?,?,?,?)"
      const insert_query = mysql.format(sqlInsert,[
         firstName,
         lastName,
         userId,
         hashedPassword,
         phoneNum
      ])

      await connection.query(search_query, async (err, result) => {
         if (err) throw (err)
         console.log("--------> Search Results")
         console.log(result.length)

         if (result.length != 0) {
            connection.release()
            console.log("------> User already exists")
            res.sendStatus(409)
         }
         else {
            await connection.query (insert_query, (err, result) => {
               connection.release()
               if (err) throw (err)
               console.log("------> Created new User")
               console.log(result.insertId)
               res.sendStatus(201)
            })
         }
      })
   })
})
