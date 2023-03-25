const isLogin = async(req,res,next)=>{
    try {
        if(req.session.user){

        }
        else{
<<<<<<< HEAD
            res.redirect("http://localhost:3030/login");
=======
            res.redirect("/login");
>>>>>>> 6a7eb66a7d91842f10c46e0e87c2e3d6cad983c9
        }
        next();
    } catch (error) {
        console.log(error.message);
    }
}
const isLogout = async(req,res,next)=>{
    try {
        if(req.session.user){
<<<<<<< HEAD
            res.redirect("http://localhost:3000");
=======
            res.redirect("/join_N");
>>>>>>> 6a7eb66a7d91842f10c46e0e87c2e3d6cad983c9
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