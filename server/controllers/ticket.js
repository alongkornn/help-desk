const model = require('../model/ticket');


exports.create = async (req, res) => {
    try {
        const ticket = await model(req.body).save();
        res.json({ message: "Create success", data: ticket });
        
    } catch (e) {
        console.log(e);
        res.send("something want wrong");
    }
}


exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const ticket = await model.findOneAndUpdate({ _id: id }, req.body).exec();
        res.json({ message: "Updata Success", oldData: ticket });
    } catch (e) {
        console.log(e);
        res.send("something want wrong");
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id;
        const ticket = await model.findOneAndDelete({ _id: id }).exec();
        res.json({ message: "Delete success", data: ticket });
    } catch (err) {
        console.log(err);
        res.send('something want wrong');
    }
}

exports.list = async (req, res) => {
    try {
        const ticket = await model.find({}).exec();
        res.send(ticket);
    } catch (err) {
        console.log(err);
        res.send('something want wrong');
    }
}

exports.read = async (req, res) => {
    try {
        const id = req.params.id
        const ticket = await model.findOne({ _id: id }).exec();
        res.send(ticket);
    } catch (err) {
        console.log(err);
        res.send('something want wrong');
    }
}
