const express=require('express');
const {addCategory, updateCategories, deleteCategories}=require('../controller/category');
const {getCategories}=require('../controller/category');
const {requireSignin,adminMiddleWare}=require('../common-middleware');
const router=express.Router();
const shortid=require('shortid');
const multer=require('multer');
const path=require('path');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename:function(req,file,cb){
        cb(null,shortid.generate()+'-'+file.originalname)
    }
})
const upload=multer({storage});
router.post('/category/create',requireSignin,adminMiddleWare,upload.single('categoryImage'),addCategory);
router.get('/category/getCategory',getCategories);
router.post('/category/update',upload.array('categoryImage'),updateCategories);
router.post('/category/delete', deleteCategories);
module.exports=router;