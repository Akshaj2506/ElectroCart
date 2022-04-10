const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/register', authController.register ); 
router.post('/login', authController.login);
router.post('/fetchTable', authController.fetchTable);
router.post('/addProduct', authController.addProduct);

module.exports = router;