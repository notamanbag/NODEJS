const express = require('express')
const path = require('path')
const root = require('../utils/path')
const router  =express.Router()

const products = []
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(root,'views','add-product.html')) 

    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button> </form>')
})
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);    
    products.push({title: req.body.title})
    res.redirect("/")
})

exports.routes = router;

exports.products = products