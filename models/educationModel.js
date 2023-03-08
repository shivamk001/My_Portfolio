import mongoose from 'mongoose'


const educationSchema=mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true},
    institute: String,
    degree: String,
    yearOfEntry: Number,
    yearOfPassing: Number
})

export default mongoose.model('Education', educationSchema)
//module.exports={Education}