const {User}=require('../models/userModel.js')
const jwt=require("jsonwebtoken")
const bcrypt=require('bcrypt')

function signJWT(data){
    console.log('IN SIGNJWT:', data)
    return jwt.sign(data, process.env.SECRET_KEY, {expiresIn: '10d'})
}

function verifyJWT(token){
    console.log('IN VERIFYJWT:', token)
    return jwt.verify(token, process.env.SECRET_KEY);
}

async function loginForm(req, res, next){
    console.log("LOGIN FORM:",req.body.email, req.body.password)
    //get user details
    const {email, password}=req.body
    const userExists=await User.findOne({userEmail: email})
    console.log('USEREXISTS in LOGIN:', userExists)
    if(!userExists){
        var err=new Error('User does not exist.')
        err.status=404
        next(err)
        //res.render('login', {error: "User does not exist."})
    }
    //verify password
    const passworddb=userExists.password
    console.log('RESULT in LOGIN:', bcrypt.compareSync(password, passworddb))
    console.log('RESULT in LOGIN:', passworddb)
    if(!bcrypt.compareSync(password, passworddb)){
        var err=new Error('Password Incorrect')
        err.status=401
        next(err)
        res.render('login',{'error':'Password Incorrect.'})
    }
    else{
        //get jwt from response header
        const jwttoken=req.headers.authorization.split(" ")[1]
        console.log('JWTTOKEN:', jwttoken)
        //verify jwt
        console.log('VERIFYJWT in LOGIN:',verifyJWT(jwttoken))
        if(verifyJWT(jwttoken)){
            res.render('successful', {message: 'Login Successful!'})
        }
        else{
            var err=new Error('Unauthorized Error. Login Again')
            err.status=401
            next(err)
            //res.render('login', {'error':'Password Incorrect.'})
        }
    }
    
}

async function signupForm(req, res, next){
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
        
                //sign JWT
                const token=signJWT({username: username, email: email})
                console.log('TOKEN:', token)
                res.setHeader('authorization',token);
                console.log('RESPONSE:', res.getHeader('authorization'))
                res.render('successful', {message: "Signup Successful."})
            }
            else{
                const err=new Error('User already exists. Try another username and email')
                err.status=401
                next(err)
                //res.render('signupform', {error: "User with the username already exists"})
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
        
}

module.exports={loginForm, signupForm}