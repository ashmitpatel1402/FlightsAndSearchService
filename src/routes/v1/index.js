const express=require('express');
const CityControllers=require('../../controllers/city-controllers');

const router=express.Router();

router.post('/city',CityControllers.create);

module.exports=router;
