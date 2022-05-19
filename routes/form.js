const express = require('express');
const router = express.Router();

const formController = require('../controllers/form');

let jwtOperations = require("../helpers/jwtOperations");

router.get('/getForms/:userId', jwtOperations.authenticateToken, formController.getForms);
router.get('/getFormDetails/:formId', jwtOperations.authenticateToken, formController.getFormDetails);
router.post('/createForm', jwtOperations.authenticateToken, formController.createForm);

router.post('/createAnswer', formController.createAnswer);
router.get('/getFormAnswers/:formId', jwtOperations.authenticateToken, formController.getFormAnswers);
router.get('/generateScriptFiles/:formId', formController.generateScriptFiles);

module.exports = router;