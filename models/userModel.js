import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId},
    userName: {type:String, unique: true},
    userLastName:{type:String},
    userFirstName: {type:String},
    userEmail: {type: String, unique: true},
    created: {type: String, default: Date.now},
    //userDOB: {type:Date},
    isAdmin: {type: Boolean, default: false},
    password: {type: String}
})

export default mongoose.model('User', userSchema)
//module.exports={User}