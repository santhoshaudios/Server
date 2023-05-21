const { increment,retrieveCount,updateCount } = require("../controllers/viewCountControllers");

const router = require('express').Router();
router.get('/',increment);
router.post('/',updateCount);
router.get('/retrieve',retrieveCount);
module.exports= router; 
