const { increment,retrieveCount } = require("../controllers/viewCountControllers");

const router = require('express').Router();
router.get('/',increment);
router.get('/retrieve',retrieveCount);
module.exports= router; 
