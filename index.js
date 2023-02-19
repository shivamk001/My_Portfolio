const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const path = require('path')
require('dotenv').config()


//connect with MongoDB
const connectDB=require('./models/db.js')
connectDB()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//pug installation
//npm i pug
app.set('view engine', 'pug')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))




//login and signup
const {loginForm, signupForm}=require('./controllers/userControllers.js')
//login
app.get('/login', function(req, res, next){res.render('loginform')})
app.post('/loginform', (req,res,next)=>{loginForm(req, res, next)})
//signup
app.get('/signup', function(req, res, next){res.render('signupform')})
//the method must be post to get the req.body data
app.post('/signupform', (req,res, next)=>{signupForm(req, res, next)})


//display homepage
const {portFolio}=require('./controllers/portfolioController.js')
app.get('/:userName', (req,res, next)=>{portFolio(req, res, next)})

//error handler
const errorHandler=require('./utils/errorHandler.js')
app.use((err, req, res, next)=>{errorHandler(err, req, res, next)})

app.listen(process.env.PORT, (err)=>{
    if(!err){
        console.log('Server is running at port:', process.env.PORT)
    }
    else{
        console.log(JSON.stringify(err));
    }
});