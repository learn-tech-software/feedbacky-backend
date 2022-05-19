const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

let jwtOperations = require("../helpers/jwtOperations");

router.post('/login', userController.login);
router.post('/createUser', userController.createUser);
router.get('/getDetails', jwtOperations.authenticateToken, userController.getDetails);

module.exports = router;