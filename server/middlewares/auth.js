const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
    try {
        let token = req.headers["authtoken"];

        if (token) {
            const decoded = jwt.verify(token, "jwtsecret");
            req.user = decoded.user;
            res.send(decoded);
            next();
        } else {
            res.send("Token not found");
        }
    } catch (err) {
        console.log(err);
        res.send("Something want wrong");
    }
}