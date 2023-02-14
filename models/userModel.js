const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, required: true},
    userName: {type:String},
    userLastName:{type:String},
    userFirstName: {type:String},
    userEmail: {type: String},
    created: {type: String, default: Date.now},
    userDOB: {type:Date}
})

const User=mongoose.model('User', userSchema)
export default User