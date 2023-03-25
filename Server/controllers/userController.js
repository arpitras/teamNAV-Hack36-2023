const User = require("../models/userModel")


const loadHome = (req,res) =>{
    try {
        res.render("home");
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    loadHome
};
module.exports = {
    loadHome
};