const authModel = require('./AuthModel');

module.exports.signup = (req, res) => {
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