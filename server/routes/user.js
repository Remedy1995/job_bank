const express=require('express');
const auth=require('../middleware/auth');
const router=express.Router();
const bodyparser = require('body-parser');
const cors=require('cors');
const createUser=require('../controller/User');
const blockedUser=require('../controller/User');
const login=require('../controller/User')
router.use(cors());
router.use(express.urlencoded({ extended: true }));
router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());
router.post('/createuser', createUser.createUser);
router.get('/blockeduser',auth,blockedUser.AllblockUsers);
router.post('/login',login.login);

module.exports=router;