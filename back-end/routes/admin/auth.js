const express=require('express');
const { adminMiddleWare, requireSignin } = require('../../common-middleware');
const { getAddress } = require('../../controller/address');
const router=express.Router();
const {signup,signin,signout}=require('../../controller/admin/auth');
const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require('../../validators/auth');
router.post('/admin/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/admin/signin',validateSigninRequest,isRequestValidated,signin);
router.post('/admin/signout',signout);

module.exports=router;