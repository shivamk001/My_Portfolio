const mongoose=require('mongoose')
const colors=require('colors')
//require('dotenv').config()
module.exports=async()=>{
    try{
        console.log(`MONGO-URI: ${process.env.MONGO_URI}`.green)
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    }
    catch(err){
        console.error(`Error: ${err.message}`.red.underline.bold)
        process.exit(1)
    }
}

//export default connectDB;