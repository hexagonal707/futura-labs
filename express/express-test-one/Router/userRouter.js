const userRouter = require("express").Router();
const userInfo = require("../Model/userSchema");


userRouter.post("/users", (req, res)=>{
    try {

        console.log(req.body);
        console.log(req.query)
        const newUser = new userInfo({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        });

         newUser.save().then((data)=>{
            res.status(200).json({ResponseinBackend:data})
        })



    }catch(err){

        res.status(500).json({error:err.message})
        console.log(err.message)
    }


});

userRouter.get('/getData',async (req,res)=>{
    try{

        const dataBaseData = await userInfo.findOne({firstName: req.body.firstName});
        res.status(200).json(dataBaseData);

    }catch (err){

        res.status(500).json(err.message);
    }


})



module.exports = userRouter;
