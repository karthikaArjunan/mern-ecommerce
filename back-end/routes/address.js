const express = require('express');
const { requireSignin, userMiddleWare, adminMiddleWare } = require('../common-middleware');
const { addAddress, getAddress } = require('../controller/address');
const router = express.Router();

router.post('/user/address/create', requireSignin, userMiddleWare, addAddress);
router.post('/user/getaddress', requireSignin, userMiddleWare, getAddress);
router.post('/user/getcustomeraddress', requireSignin , adminMiddleWare , getAddress );
module.exports = router;