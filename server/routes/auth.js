const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth');
const { auth } = require('../middlewares/auth');


router.post('/register/admin', register);
router.post('/login', login);
router.get('/hello', auth, (req, res) => {
    res.send("hello world");
})

module.exports = router;