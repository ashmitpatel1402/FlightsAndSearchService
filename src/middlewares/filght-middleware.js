const {ClientErrors}=require('../utils/error-codes');

const checkCreateFlight=(req,res)=>{
    if(!req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
        ){
            return res.status(ClientErrors.BAD_REQUEST).json({
                data:{},
                success:false,
                message:"Invalid request body for create Flight",
                err:"Missing mandatory details to create a flight"
            });
        }

    next();
}

module.exports={
    checkCreateFlight
}