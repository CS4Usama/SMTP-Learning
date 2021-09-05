const ordersModel = require('./OrdersModel');

module.exports.createOrder = (req, res) => {
    console.log("Req User", req.user);
    const newOrder = new ordersModel({
        orderID: req.body.id,
        createdAt: new Date(),
        date: req.body.date
    });

    newOrder.save((error, success) => {
        console.log("Success", success);
        console.log("Error", error);
        if(error) {
            res.send("Some Error Occurs while Creating an Order");
        }
        res.send("Order added Successfully");
    });
}

module.exports.getOrder = (req, res) => {
    ordersModel.find({}, (err, data) => {
        console.log("SUCCESS", data);
        console.log("ERROR", err);
        if(err) {
            res.send("Some ERROR Occurs in Get Orders");
        }
        res.json(data);
    });
}

module.exports.updateOrder = (req, res) => {
    ordersModel.updateOne(
        { date: "Some Date" },
        { createdAt: new Date() },
        (err, data) => {
            console.log("success", data);
            console.log("error", err);
            if(err) {
                res.send("Error Occurs while Updating an Order");
            }
            res.json(data);
        }
    );
}