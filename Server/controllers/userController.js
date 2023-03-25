const User = require("../models/userModel")


const loadHome = (req,res) =>{
    try {
        res.render("join_N");
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    loadHome
};