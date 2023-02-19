function portFolio(req, res){
    console.log('USERNAME:', req.params.userName);
    res.render('index',{title: `PORTFOLIO`, message: `Hello there!`})
}

module.exports={portFolio}