const express=require('express')
const app=express()
const path = require('path')
const PORT=3000

//connect with MongoDB
const connectDB=require('./models/db.js')
connectDB()


//pug installation
//npm i pug
app.set('view engine', 'pug')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.render('index',{title: 'PORTFOLIO', message: 'Hello there!'})
})

app.listen(PORT, (err)=>{
    if(!err){
        console.log('Server is running at port:', PORT)
    }
    else{
        console.log(JSON.stringify(err));
    }
});