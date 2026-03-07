const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.post('/users', UserController.create);
router.get('/users', UserController.list);
router.get('/users/:id', UserController.show);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

module.exports = router;