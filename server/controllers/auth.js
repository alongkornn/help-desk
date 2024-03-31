const model = require('../model/auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body;
        let user = await model.findOne({ email })
        if (user) {
            res.send("Email Already exists");
        } else {
            const salt = await bcrypt.genSalt(10);
            
            user = await model({
                fname,
                lname,
                email,
                password
            })
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            res.send("Create User Success");
        }
    } catch (err) {
        console.log(err);
        res.send("something want wrong");
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await model.findOneAndUpdate({ email }, { new: true });
        if (user) {
            const isMatchPassword = await bcrypt.compare(password, user.password)
            if (isMatchPassword) {
                const payload = {
                    user: {
                        email: user.email,
                        role: user.role
                    }
                }
                jwt.sign(payload, 'jwtsecret', { expiresIn: 3600 }, (err, token) => {
                    if (err) {
                        throw err;
                    } else {
                        res.json({ token, payload });
                    }
                })
            } else {
                res.send("Password Invalid");
            }
        } else {
            res.send("Email not found");
        }
        
    } catch (err) {
        console.log(err);
    }
}