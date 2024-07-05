const UserInfoSchema = require("../Model/userSchema");
const argon = require("argon2");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,

    }
)

const storage = multer.diskStorage({
    filename: function (req, file, callback) {

        callback(null, file.originalname);

    }
})

const upload = multer({storage: storage});


const signup = async (req, res) => {
    try {
        console.log(req.body, "third check");

        const {firstName, lastName, age, email, phone, password} = req.body;

        if (!firstName || !lastName || !age || !email || !phone || !password) {
            console.log("All fields are required.");

            return res.status(400).json({error: "All fields are required."});
        }


        const existingUserEmail = await UserInfoSchema.findOne(
            {email},
            {},
            {lean: true},
        );
        const existingUserPhone = await UserInfoSchema.findOne(
            {phone},
            {},
            {lean: true},
        );
        console.log(existingUserPhone, existingUserEmail, "***")
        if (existingUserEmail || existingUserPhone) {
            console.log("User already exists.");
            return res.status(400).json({error: "User already exists."});
        }

        const uploadedImage = await cloudinary.uploader.upload(req.file.path);
        console.log(uploadedImage, "UPLOADED IMAGE");

        const imagePath = uploadedImage.secure_url;

        const newUser = new UserInfoSchema({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            age: req.body.age,
            password: await argon.hash(req.body.password),
            type: req.body.type,
            image: imagePath
        });
        console.log(newUser);
        await newUser.save();
        res.status(200).json("success");
    } catch (err) {
        console.error("Error during user signup:", err);
        res.status(500).json({error: "Server error. Please try again later."});
    }
};


const login = async (req, res) => {
    try {
        console.log("***************************", req.body);
        const {email, password} = req.body;

        if (!email || !password) {
            console.log("Email and Password is required.");
            res.status(400).json({error: "Email and Password is required."});
        }


        const dbExistingUser = await UserInfoSchema.findOne(
            {email},
            {},
            {lean: true},
        );
        console.log(dbExistingUser);
        if (!dbExistingUser) {
            return res.status(401).json({error: "Email or Password is incorrect."});
        }

        const isPasswordValid = await argon.verify(
            dbExistingUser.password,
            password,
        );

        !isPasswordValid && res.status(401).json("not matched");
        if (dbExistingUser && isPasswordValid) {
            console.log("Login Successful.");
            const sessionToken = jwt.sign(
                {
                    id: dbExistingUser._id,
                },
                process.env.JWT_SECRET_KEY,
            );

            return res.status(200).json({
                success: true,
                userId: dbExistingUser._id,
                tokenId: sessionToken,
            });
        }
    } catch (err) {
        console.log(err.message);
        return res
            .status(500)
            .json({error: "Server error. Please try again later."});
    }
};

module.exports = {
    signup: [upload.single('image'), signup],
    login,
};