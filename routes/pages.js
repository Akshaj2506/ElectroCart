const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
   res.render('index');
});
router.get('/products',(req, res) => {
   res.render('products');
})
router.get('/add-product', (req, res) => {
   res.render('addProduct');
})
router.get('/contact',(req,res) => {
   res.render('contactus');
})

module.exports = router;