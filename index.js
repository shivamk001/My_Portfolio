const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const path = require('path')
const {User}=require('./models/userModel.js')
require('dotenv').config()
//connect with MongoDB
const connectDB=require('./models/db.js')
const bcrypt=require('bcrypt')
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

app.get('/', function(req, res){
    res.render('index',{title: 'PORTFOLIO', message: 'Hello there!'})
})

app.get('/login', function(req, res){
    res.render('loginform')
})

app.get('/signup', function(req, res){
    res.render('signupform')
})

//the method must be post to get the req.body data
app.post('/signupform', async function(req, res){
    const {username, firstname, lastname, email, password, confirmpassword}=req.body
    console.log("SIGNUPFORM:",username, firstname, lastname, email, password, confirmpassword)

    if(password===confirmpassword){
        const userExists1=await User.findOne({userName: username})
        const userExists2=await User.findOne({userEmail: email})
        console.log('UserExists XYZ1:',userExists1)
        console.log('UserExists XYZ2:',userExists2)
        if(!userExists1 && !userExists2){
        const salt = bcrypt.genSaltSync(parseInt(process.env.saltRounds,10));
        console.log('SALT:', salt);
        const hash = bcrypt.hashSync(password, salt);
        console.log('HASH:', hash);
    
        console.log('RESULT:', bcrypt.compareSync(password, hash)); // true
        //bcrypt.compareSync(someOtherPlaintextPassword, hash); // false

        const newUser=await User.create({
            userName: username,
            userLastName: lastname,
            userFirstName: firstname,
            userEmail:email,
            password: hash
        })
        console.log('NEWUSER:', newUser)
        res.render('successful', {message: "Login Successful."})
        }
        else{
            res.render('signupform', {error: "User with the username already exists"})
        }
    }
    else{
        res.render('signupform', {error: "Passwords and Cofirm passwords don't match. Reenter both."})
    }
    //find if user already exists
    //if does not 
    //encrypt the password

    //make new user
    // save the user in mongo
    //generate jwt token
    //
    
})

//the method must be post to get the req.body data
app.post('/loginform', function(req, res){
    console.log("FORM:",req.body.email, req.body.password)
    res.json(req.body)
})



app.listen(process.env.PORT, (err)=>{
    if(!err){
        console.log('Server is running at port:', process.env.PORT)
    }
    else{
        console.log(JSON.stringify(err));
    }
});