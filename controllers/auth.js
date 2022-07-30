const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var selectedProduct = "";

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
            console.log(result);
            const hashedPassword = result[0].password;

            if (await bcrypt.compare(password, hashedPassword)) {
               return res.render('home.hbs', {
                  accountName: `${result[0].first_name}`
               })
            } else {
               return res.render('index', {
                  login_message: 'Password is incorrect'
               });
            };
         };
      };
   });
}
exports.fetchTable = (req, res) => {
   console.log(req.body);
   selectedProduct = req.body.tableName;
}
exports.addProduct = (req, res) => {
   console.log(req.body);
   const productName = req.body.deviceName;
   const price = "₹"+req.body.price;
   const picUrl = "/images/"+req.body.picUrl;
   if (selectedProduct == "cable") {
      const category = req.body.cableCategory;
      const shieldInfo = req.body.shieldInfo;
      const length = req.body.length + "cm";
      const material = req.body.material;
      db.query(`SELECT name from ${selectedProduct} where name = '${productName}'`, async(error, results) => {
         if(error) {
            console.log(error);
         }
         if (results.length > 0) {
            console.log("Product already exists");
         }
         db.query(`INSERT INTO ${selectedProduct} SET ?`, {
            name: productName,
            category: category,
            shield_info: shieldInfo,
            length: length,
            material: material,
            price: price,
            pic_url: picUrl
         }), (error, results) => {
            if (error) {
               console.log(error);
            } else {
               console.log("Product successfully added!");
            };
         };
      });
   }
   if (selectedProduct == "cameras") {
      const type = req.body.type;
      const resolution = req.body.resolution + "MP";
      const storage = req.body.storage;
      const video = req.body.video;
      db.query(`SELECT name from ${selectedProduct} where name = '${productName}'`, async(error, results) => {
         if(error) {
            console.log(error);
         }
         if (results.length > 0) {
            console.log("Product already exists");
         }
         db.query(`INSERT INTO ${selectedProduct} SET ?`, {
            name: productName,
            type: type,
            price: price,
            resolution: resolution,
            storage: storage,
            video: video,
            pic_url: picUrl
         }), (error, results) => {
            if (error) {
               console.log(error);
            } else {
               console.log("Product successfully added!");
            };
         };
      });
   }
   if (selectedProduct == "cpu") {
      const cores = req.body.coreNumber;
      const threads = req.body.threadsNumber;
      const clockSpeed = req.body.clockSpeed +"GHz";
      const cacheAmount = req.body.cacheAmount;
      db.query(`SELECT name from ${selectedProduct} where name = '${productName}'`, async(error, results) => {
         if(error) {
            console.log(error);
         }
         if (results.length > 0) {
            console.log("Product already exists");
         }
         db.query(`INSERT INTO ${selectedProduct} SET ?`, {
            name: productName,
            core_num: cores,
            thread_num: threads,
            clock_speed: clockSpeed,
            cache_amount: cacheAmount,
            price: price,
            pic_url: picUrl
         }), (error, results) => {
            if (error) {
               console.log(error);
            } else {
               console.log("Product successfully added!");
            };
         };
      });

   }
   if (selectedProduct == "headphones") {
      const driver = req.body.driver;
      const type = req.body.type;
      const sensitivity = req.body.sensitivity+" dB";
      const impedance = req.body.impedance+" Ohms";
      const frequency = req.body.frequency;
      db.query(`SELECT name from ${selectedProduct} where name = '${productName}'`, async(error, results) => {
         if(error) {
            console.log(error);
         }
         if (results.length > 0) {
            console.log("Product already exists");
         }
         db.query(`INSERT INTO ${selectedProduct} SET ?`, {
            name: productName,
            driver: driver,
            type: type,
            sensitivity: sensitivity,
            impedance: impedance,
            frequency: frequency,
            price: price,
            pic_url: picUrl
         }), (error, results) => {
            if (error) {
               console.log(error);
            } else {
               console.log("Product successfully added!");
            };
         };
      });
   }
   if (selectedProduct == "laptop") {
      const ramstorage = req.body.ramStorage;
      const screenSize = req.body.screenSize;
      const processor = req.body.processor;
      const resolution = req.body.resolution;
      const os = req.body.operatingSystem;
      db.query(`SELECT name from ${selectedProduct} where name = '${productName}'`, async(error, results) => {
         if(error) {
            console.log(error);
         }
         if (results.length > 0) {
            console.log("Product already exists");
         }
         db.query(`INSERT INTO ${selectedProduct} SET ?`, {
            name: productName,
            ram_storage: ramstorage,
            screen_size: screenSize,
            processor: processor,
            resolution: resolution,
            operating_system: os,
            price: price,
            pic_url: picUrl
         }), (error, results) => {
            if (error) {
               console.log(error);
            } else {
               console.log("Product successfully added!");
            };
         };
      });
   }
   if (selectedProduct == "mobile") {
      const processor = req.body.processor;
      const camera = req.body.camera;
      const ramstorage = req.body.ramStorage;
      const screensize = req.body.screenSize;
      const resolution = req.body.resolution;
      db.query(`SELECT name from ${selectedProduct} where name = '${productName}'`, async(error, results) => {
         if(error) {
            console.log(error);
         }
         if (results.length > 0) {
            console.log("Product already exists");
         }
         db.query(`INSERT INTO ${selectedProduct} SET ?`, {
            name: productName,
            processor: processor,
            camera: camera,
            ram_storage: ramstorage,
            screen_size: screensize,
            resolution: resolution,
            price: price,
            pic_url: picUrl
         }), (error, results) => {
            if (error) {
               console.log(error);
            } else {
               console.log("Product successfully added!");
            };
         };
      });
   }
   if (selectedProduct == "motherboard") {
      const cpuSupport = req.body.cpuSupport;
      const socket = req.body.socket;
      const storage = req.body.storage;
      const network = req.body.network;
      db.query(`SELECT name from ${selectedProduct} where name = '${productName}'`, async(error, results) => {
         if(error) {
            console.log(error);
         }
         if (results.length > 0) {
            console.log("Product already exists");
         }
         db.query(`INSERT INTO ${selectedProduct} SET ?`, {
            name: productName,
            cpu_support: cpuSupport,
            socket: socket,
            storage: storage,
            network: network,
            price: price,
            pic_url: picUrl
         }), (error, results) => {
            if (error) {
               console.log(error);
            } else {
               console.log("Product successfully added!");
            };
         };
      });
   }
   if (selectedProduct == "ram") {
      const frequency = req.body.frequency;
      const voltage = req.body.voltage;
      const ramAmount = req.body.ramAmount;
      const bits = req.body.bitCategory;
      db.query(`SELECT name from ${selectedProduct} where name = '${productName}'`, async(error, results) => {
         if(error) {
            console.log(error);
         }
         if (results.length > 0) {
            console.log("Product already exists");
         }
         db.query(`INSERT INTO ${selectedProduct} SET ?`, {
            name: productName,
            frequency: frequency,
            voltage: voltage,
            ram_amount: ramAmount,
            bits: bits,
            price: price,
            pic_url: picUrl
         }), (error, results) => {
            if (error) {
               console.log(error);
            } else {
               console.log("Product successfully added!");
            };
         };
      });
   }
   if (selectedProduct == "storage") {
      const formfactor = req.body.formFactor;
      const dimensions = req.body.dimensions;
      const capacity = req.body.capacity;
      const speed = req.body.speed;
      db.query(`SELECT name from ${selectedProduct} where name = '${productName}'`, async(error, results) => {
         if(error) {
            console.log(error);
         }
         if (results.length > 0) {
            console.log("Product already exists");
         }
         db.query(`INSERT INTO ${selectedProduct} SET ?`, {
            name: productName,
            form_factor: formfactor,
            dimensions: dimensions,
            capacity: capacity,
            speed: speed,
            price: price,
            pic_url: picUrl
         }), (error, results) => {
            if (error) {
               console.log(error);
            } else {
               console.log("Product successfully added!");
            };
         };
      });
   }
   if (selectedProduct == "televisions") {
      const displaytype = req.body.displayType;
      const screensize = req.body.screenSize;
      const resolution = req.body.resolution;
      const refreshrate = req.body.refreshRate + " Hz";
      db.query(`SELECT name from ${selectedProduct} where name = '${productName}'`, async(error, results) => {
         if(error) {
            console.log(error);
         }
         if (results.length > 0) {
            console.log("Product already exists");
         }
         db.query(`INSERT INTO ${selectedProduct} SET ?`, {
            name: productName,
            display_type: displaytype,
            screen_size: screensize,
            resolution: resolution,
            refresh_rate: refreshrate,
            price: price,
            pic_url: picUrl
         }), (error, results) => {
            if (error) {
               console.log(error);
            } else {
               console.log("Product successfully added!");
            };
         };
      });
   }
}