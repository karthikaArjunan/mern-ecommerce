const express=require('express');
//const {addCategory}=require('../controller/category');
//const {getCategories}=require('../controller/category');
const {requireSignin,adminMiddleWare}=require('../common-middleware');
const { createProduct,getProductsBySlug, getProductDetailsById,deleteProductById, getProducts } = require('../controller/product');
const shortid=require('shortid');
const multer=require('multer');
const router=express.Router();
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
router.post('/product/create',requireSignin,adminMiddleWare,upload.array('productPicture'),createProduct);
router.get('/products/:slug',getProductsBySlug)
//router.get('/category/getCategory',getCategories);
router.get("/product/:productId", getProductDetailsById);
router.delete(
    "/product/deleteProductById",
    requireSignin,
    adminMiddleWare,
    deleteProductById
  );
  router.post(
    "/product/getProducts",
    requireSignin,
    adminMiddleWare,
    getProducts
  );
module.exports=router;