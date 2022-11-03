const express=require('express');
const router=express.Router();
const bodyparser = require('body-parser');
const deposit=require('../controller/Funds');
const cors=require('cors');
router.use(cors());
router.use(express.urlencoded({ extended: true }));
router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());
router.post('/deposit',deposit.makeDeposit);

module.exports=router;