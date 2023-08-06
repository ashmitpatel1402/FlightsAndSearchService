const {FlightService}=require('../services/index');

const flightService=new FlightService();

const create=async (req,res)=>{
    try{ let flightRequestData={//done to avoid passing unwanted data as it makes our object bulky
        flightNumber:req.body.flightNumber,
        airplaneId:req.body.airplaneId,
        departureAirportId:req.body.departureAirportId,
        arrivalAirportId:req.body.arrivalAirportId,
        arrivalTime:req.body.arrivalTime,
        departureTime:req.body.departureTime,
        price:req.body.price
    };
          
         const flight=await flightService.createFlight(flightRequestData);
         return res.status.json({
            data:flight,
            success:true,
            message:"New flight added ",
            err:{}
         })
    }catch(error){
        console.log("error");
        return res.status(500).json({
           data:{},
           success:false,
           message:"Not able to create a flight",
           err:error
        });
    }
}
const getAll=async(req,res)=>{
    try{
         const response=await flightService.getAllFlightData(req.query);
         return res.status(200).json({
            data:response,
            success:true,
            message:"fetched the flights successfully",
            error:{}
         });
    }catch(error){
        console.log("error");
        return res.status(500).json({
           data:{},
           success:false,
           message:"Not able to fetch the flights",
           err:error
        });   
    }
}
module.exports={
    create,
    getAll
}