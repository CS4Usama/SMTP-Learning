const authModel = require('./AuthModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports.signup = async (req, res) => {
    const {name, email, password, createdAt} = req.body;
    console.log("Req Body", req.body);

    if(!name || !email || !password || !createdAt) {
        res.status(400).send("All Parameters (Params) are Required");
    }

    const user = await authModel.findOne({email: email});
    if(user) {
        res.status(400).send("User E-Mail Already Registered");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);      // 10 => Hash/Algorithim
    console.log("Encrypted Password: ", encryptedPassword);

    const newUser = new authModel({
        // name: req.body.name,
        // email: req.body.email,
        // password: req.body.password,
        // createdAt: new Date(),
        name, email, password: encryptedPassword, createdAt
    });

    newUser.save((error, success) => {
        /* agar aap chahty hain keh User jab Signup kary to usy Login na karna pary, direct he Signup karty
        sath Login ho jaye to hamein yahan 'Token' lagana pary ga aur Login wali Logic likhain gy */
        console.log("Success", success);
        console.log("Error", error);
        if(error) {
            res.status(501).send("Some Error Occurs while Creating a User");
        }
        res.status(200).send("User has been Registered / User added Successfully");
    });
}


module.exports.login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        res.status(400).send("All Parameters (Params) are Required");
    }

    // const user = await authModel.find({email: email});   It will return Password Incorrect. So, we use findOne() instead of it for better understanding
    const user = await authModel.findOne({email: email});
    if(!user) {
        res.status(401).send("User E-Mail not Found");
    } else if(! await bcrypt.compare(password, user.password)) {
        res.status(401).send("Your Password is Incorrect");
    }

    // const token = jwt.sign({foo: 'bar'}, 'shhhhh');
    // const token = await jwt.sign({...user}, process.env.jwtKey, {expiresIn: '5h'});
    const token = await jwt.sign({email: user.email, name: user.name}, process.env.jwtKey, {expiresIn: '5h'});
    console.log("Token", token);

    let userRecord = {
        // ...user,
        email: user.email,
        name: user.name,
        token
    }
    // user.token = token;
    // res.status(200).json(user);
    res.status(200).json(userRecord);
}