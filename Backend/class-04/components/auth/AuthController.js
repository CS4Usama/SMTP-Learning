const authModel = require('./AuthModel');

module.exports.signup = (req, res) => {
    if(!name || !email || !password || !createdAt) {
        res.status(400).send("All Parameters (Params) are Required");
    }
    const newUser = new authModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        createdAt: new Date(),
    });

    newUser.save((error, success) => {
        console.log("Success", success);
        console.log("Error", error);
        if(error) {
            res.send("Some Error Occurs while Creating an Order");
        }
        res.send("Order added Successfully");
    });
}