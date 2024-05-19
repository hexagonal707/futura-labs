const userRouter = require("express").Router();
const userInfo = require("../Model/userSchema");


userRouter.post("/users", (req, res)=>{
    try {
        console.log(req.body);

        const newUser = userInfo.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        });

        newUser.save();

        res.send("Success");

    }catch(err){

        res.send("Failed");
        console.log(err.message)
    }


});



module.exports = userRouter;
