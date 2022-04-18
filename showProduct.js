const fs = require('fs');
const mysql = require("mysql");
const dotenv = require("dotenv");
// const productName = require("./script");
dotenv.config( {path: './.env'});
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});
var database = {
   cable: [],
   cameras: [],
   cpu: [],
   headphones: [],
   laptop: [],
   mobile: [],
   motherboard: [],
   ram: [],
   storage: [],
   televisions: []
}
var databaseStr = JSON.stringify(database);
fs.writeFile('data.json', databaseStr, 'utf-8', (err, insert)=> {
   if (err) {
      console.log("Having problems inserting the table structure");
   }
})
function getCable() {
   db.query(`SELECT * FROM cable`, async(error, results) => {
      if (error) {
         console.log(error);
      }
      if (results.length > 0) {
         fs.readFile('data.json','utf-8', (err , data) => {
            if (err) {
               console.log(err);
            } else {
               database.cable.push(results);
               json = JSON.stringify(database);
               fs.writeFile('data.json', json, 'utf-8', (err, data) => {
                  if (err) {
                     console.log("Error detected");
                  }
               })
            }
         })
         console.log(`Cable successfully added`)
      }
   })
}
function getCameras() { 
   db.query(`SELECT * FROM cameras`, async(error, results) => {
      if (error) {
         console.log(error);
      }
      if (results.length > 0) {
         fs.readFile('data.json','utf-8', (err , data) => {
            if (err) {
               console.log(err);
            } else {
               database.cameras.push(results);
               json = JSON.stringify(database);
               fs.writeFile('data.json', json, 'utf-8', (err, data) => {
                  if (err) {
                     console.log("Error detected");
                  }
               })
            }
         })
         console.log(`Cameras successfully added`);
      }
   })
}
function getCpu() { 
   db.query(`SELECT * FROM cpu`, async(error, results) => {
      if (error) {
         console.log(error);
      }
      if (results.length > 0) {
         fs.readFile('data.json','utf-8', (err , data) => {
            if (err) {
               console.log(err);
            } else {
               database.cpu.push(results);
               json = JSON.stringify(database);
               fs.writeFile('data.json', json, 'utf-8', (err, data) => {
                  if (err) {
                     console.log("Error detected");
                  }
               })
            }
         })
         console.log(`CPU successfully added`)
      }
   })
}
function getHeadphones() {
   db.query(`SELECT * FROM headphones`, async(error, results) => {
      if (error) {
         console.log(error);
      }
      if (results.length > 0) {
         fs.readFile('data.json','utf-8', (err , data) => {
            if (err) {
               console.log(err);
            } else {
               database.headphones.push(results);
               json = JSON.stringify(database);
               fs.writeFile('data.json', json, 'utf-8', (err, data) => {
                  if (err) {
                     console.log("Error detected");
                  }
               })
            }
         })
         console.log(`Headphones successfully added`);
      }
   })
}
function getLaptop() {
   db.query(`SELECT * FROM laptop`, async(error, results) => {
      if (error) {
         console.log(error);
      }
      if (results.length > 0) {
         fs.readFile('data.json','utf-8', (err , data) => {
            if (err) {
               console.log(err);
            } else {
               database.laptop.push(results);
               json = JSON.stringify(database);
               fs.writeFile('data.json', json, 'utf-8', (err, data) => {
                  if (err) {
                     console.log("Error detected");
                  }
               })
            }
         })
         console.log(`Laptop successfully added`)
      }
   })
}
function getMobile() {   
   db.query(`SELECT * FROM mobile`, async(error, results) => {
      if (error) {
         console.log(error);
      }
      if (results.length > 0) {
         fs.readFile('data.json','utf-8', (err , data) => {
            if (err) {
               console.log(err);
            } else {
               database.mobile.push(results);
               json = JSON.stringify(database);
               fs.writeFile('data.json', json, 'utf-8', (err, data) => {
                  if (err) {
                     console.log("Error detected");
                  }
               })
            }
         })
         console.log(`Mobiles successfully added`)
      }
   })
}
function getMotherboard() { 
   db.query(`SELECT * FROM motherboard`, async(error, results) => {
      if (error) {
         console.log(error);
      }
      if (results.length > 0) {
         fs.readFile('data.json','utf-8', (err , data) => {
            if (err) {
               console.log(err);
            } else {
               database.motherboard.push(results);
               json = JSON.stringify(database);
               fs.writeFile('data.json', json, 'utf-8', (err, data) => {
                  if (err) {
                     console.log("Error detected");
                  }
               })
            }
         })
         console.log(`Motherboards successfully added`)
      }
   })
}
function getRam() {
   db.query(`SELECT * FROM ram`, async(error, results) => {
      if (error) {
         console.log(error);
      }
      if (results.length > 0) {
         fs.readFile('data.json','utf-8', (err , data) => {
            if (err) {
               console.log(err);
            } else {
               database.ram.push(results);
               json = JSON.stringify(database);
               fs.writeFile('data.json', json, 'utf-8', (err, data) => {
                  if (err) {
                     console.log("Error detected");
                  }
               })
            }
         })
         console.log(`RAM successfully added`)
      }
   }) 
}
function getStorage() {  
   db.query(`SELECT * FROM storage`, async(error, results) => {
      if (error) {
         console.log(error);
      }
      if (results.length > 0) {
         fs.readFile('data.json','utf-8', (err , data) => {
            if (err) {
               console.log(err);
            } else {
               database.storage.push(results);
               json = JSON.stringify(database);
               fs.writeFile('data.json', json, 'utf-8', (err, data) => {
                  if (err) {
                     console.log("Error detected");
                  }
               })
            }
         })
         console.log(`Storage successfully added`)
      }
   })
}
getStorage();
function getTelevisions() {
   db.query(`SELECT * FROM televisions`, async(error, results) => {
      if (error) {
         console.log(error);
      }
      if (results.length > 0) {
         fs.readFile('data.json','utf-8', (err , data) => {
            if (err) {
               console.log(err);
            } else {
               database.televisions.push(results);
               json = JSON.stringify(database);
               fs.writeFile('data.json', json, 'utf-8', (err, data) => {
                  if (err) {
                     console.log("Error detected");
                  }
               })
            }
         })
         console.log(`TVs successfully added`)
      }
   }) 
}