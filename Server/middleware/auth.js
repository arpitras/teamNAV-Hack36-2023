const isLogin = async(req,res,next)=>{
    try {
        if(req.session.user){

        }
        else{
            res.redirect("http://localhost:3030/login");
        }
        next();
    } catch (error) {
        console.log(error.message);
    }
}
const isLogout = async(req,res,next)=>{
    try {
        if(req.session.user){
            res.redirect("http://localhost:3000");
        }
        next();
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    isLogin,
    isLogout
}