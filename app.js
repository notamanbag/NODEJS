const express = require('express')
const  bodyParser = require('body-parser')

const app = express()
const path = require('path')


app.set('view engine','pug')
app.set('views','views')

const adminData = require('./routes/admin')
const genralROutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin', adminData.routes) // the '/admin' will filter oyt the url and yhe url with /admin will go into this routes
app.use(genralROutes)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html')) 

    //res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000,(req,res)=>{
    console.log("Server started");
})