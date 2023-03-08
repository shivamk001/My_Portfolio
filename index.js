import express from 'express'
const app=express()
import bodyParser from 'body-parser'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

//connect with MongoDB
import connectDB from './models/db.js'
connectDB()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//pug installation
//npm i pug
app.set('view engine', 'pug')
app.set('views', 'views')
//after es6 import
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')))




//login and signup
import {loginForm, signupForm} from './controllers/userControllers.js'
//login
app.get('/login', function(req, res, next){res.render('loginform')})
app.post('/loginform', (req,res,next)=>{loginForm(req, res, next)}, (req, res, next)=>{console.log("USERL:", res.header.userName)})
//signup
app.get('/signup', function(req, res, next){res.render('signupform')})
//the method must be post to get the req.body data
app.post('/signupform', (req,res, next)=>{signupForm(req, res, next)})


//display homepage
import {portFolio, educationForm} from './controllers/portfolioController.js'
app.post('/educationform', (req,res,next)=>{educationForm(req, res, next)})
app.get('/:userName', (req,res, next)=>{portFolio(req, res, next)})

//delete data
import { deleteEducation } from './controllers/portfolioController.js'
app.delete('/delete', (req,res,next)=>{deleteEducation(req, res, next)})

//error handler
import errorHandler from './utils/errorHandler.js'
app.use((err, req, res, next)=>{errorHandler(err, req, res, next)})

app.listen(process.env.PORT, (err)=>{
    if(!err){
        console.log('Server is running at port:', process.env.PORT)
    }
    else{
        console.log(JSON.stringify(err));
    }
});