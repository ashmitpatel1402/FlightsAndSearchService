const express=require('express');
const CityControllers=require('../../controllers/city-controllers');
const FlightController=require('../../controllers/flight-controller');
const router=express.Router();

router.post('/city',CityControllers.create);
router.delete('/city/:id',CityControllers.destroy);
router.get('/city:id',CityControllers.get);
router.patch('/city/:id',CityControllers.update);
router.get('/city',CityControllers.getAll);

router.post('/flights',FlightController.create);
router.get('/flights',FlightController.getAll);

module.exports=router;
