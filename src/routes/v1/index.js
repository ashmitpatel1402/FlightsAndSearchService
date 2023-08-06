const express=require('express');
const CityControllers=require('../../controllers/city-controllers');
const FlightController=require('../../controllers/flight-controller');
const AirportController=require('../../controllers/airport-controller');
const {FlightMiddlewares}=require('../../middlewares/index');
const router=express.Router();

router.post('/city',CityControllers.create);
router.delete('/city/:id',CityControllers.destroy);
router.get('/city:id',CityControllers.get);
router.patch('/city/:id',CityControllers.update);
router.get('/city',CityControllers.getAll);

router.post('/flights',
            FlightMiddlewares.checkCreateFlight,
            FlightController.create
);           
router.get('/flights',FlightController.getAll);
router.post('./airports',AirportController.create);
router.patch('./airports/:id',AirportController.update);

module.exports=router;
