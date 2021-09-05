const authModel = require('./AuthModel');
const jwt = require('jsonwebtoken');


module.exports.signup = (req, res) => {
    const {name, email, password, createdAt} = req.body;

    if(!name || !email || !password || !createdAt) {
        res.status(400).send("All Parameters (Params) are Required");
    }
    const newUser = new authModel({
        // name: req.body.name,
        // email: req.body.email,
        // password: req.body.password,
        // createdAt: new Date(),
        name, email, password, createdAt
    });

    newUser.save((error, success) => {
        /* agar aap chahty hain keh User jab Signup kary to usy Login na karna pary, direct he Signup karty
        sath Login ho jaye to hamein yahan 'Token' lagana pary ga aur Login wali Logic likhain gy */
        console.log("Success", success);
        console.log("Error", error);
        if(error) {
            res.send("Some Error Occurs while Creating an Order");
        }
        res.status(200).send("User has been Registered / User added Successfully");
    });
}


module.exports.login = (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        res.status(400).send("All Parameters (Params) are Required");
    }

    const user = await authModel.find({email: email});
    if(!user) {
        res.status(401).send("User E-Mail not Found");
    } else if(user.password !== password) {
        res.status(401).send("Your Password is Incorrect");
    }

    // const token = jwt.sign({foo: 'bar'}, 'shhhhh');
    const token = jwt.sign(user, process.env.jwtKey, {expiresIn: '5h'});

    user.token = token;
    res.status(200).json(user);
}