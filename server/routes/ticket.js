const express = require('express');
const { create, update, remove, read, list } = require('../controllers/ticket');
const router = express.Router();



router.post('/ticket', create);
router.put('/ticket/:id', update);
router.delete('/ticket/:id', remove);
router.get('/ticket/:id', read);
router.get('/ticket', list);



module.exports = router;