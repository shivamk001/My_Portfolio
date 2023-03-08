import mongoose from 'mongoose'
import colors from 'colors'
//require('dotenv').config()
export default async()=>{
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