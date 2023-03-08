import Education from '../models/educationModel.js'
import User from '../models/userModel.js'
function portFolio(req, res){
    console.log('USERNAME:', req.params.userName);
    res.render('index',{title: `PORTFOLIO`, message: `Hello there!`})
}

async function educationForm(req, res, next){
    console.log('EDUCATIONFORM:', req.body)
    const {username, institute, degree, yearOfPassing}=req.body
    const userExists=await User.findOne({userName: username})
    //first find if a document with same, userId, institute and degree exists
    const educationExists=await Education.find({
        userId: userExists._id,
        institute: institute,
        degree: degree,
        yearOfPassing: yearOfPassing
    })
    console.log('EDUCATIONEXISTS:',educationExists, educationExists==[], !educationExists, educationExists.length==0, educationExists===[])
    var allEducation=await Education.find({
        userId: userExists._id
    })
    console.log('ALLEDUCATION:', allEducation)
    if(educationExists.length==0){
        const newEducation=await Education.create(
            {userId: userExists._id,
            institute: institute,
            degree: degree,
            yearOfPassing: yearOfPassing
            })
        console.log('NEWEDUCATION:', newEducation)
        allEducation=await Education.find({
            userId: userExists._id
        })
        console.log('ALLEDUCATION:', allEducation)
        res.render('successful', {message: 'New education added!', userName: userExists.userName, allEducation: allEducation})
    }
    else{
        res.render('successful', {message: 'Education already exists!', userName: userExists.userName, allEducation: allEducation})
    }
}

async function deleteEducation(req, res, next){
    
    const {institute, degree, yearOfPassing}=req.body
    console.log(`DELETED EDUCATION:${institute}, ${degree}, ${yearOfPassing}`.red.underline)
    //check if education exists
    //if exists then delete
    const deletedResponse=await Education.deleteOne({
        //userId: userId,
        institute: institute,
        degree: degree,
        yearOfPassing: yearOfPassing
    })
    console.log(`DELETED RESPONSE:, ${deletedResponse}`.yellow.underline)
    if(deletedResponse.acknowledged){
        res.send(deletedResponse)
    }
    //else 

}

export {portFolio, educationForm, deleteEducation}