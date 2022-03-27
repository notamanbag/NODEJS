const express = require('express')
const path = require('path')
const root = require('../utils/path')

const adminData = require('./admin')
const router  =express.Router()
router.get('/',(req,res,next)=>{
   console.log(adminData.products);
   //res.sendFile(path.join(root,'views','shop.html')) /// do use static typed patbhas in windoews we use "\\" and in lunix we use "//"
   res.render('shop',{prods:adminData.products,docTitle:"SHop"})
})
module.exports = router