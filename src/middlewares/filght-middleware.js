const checkCreateFlight=(req,res)=>{
    if(!req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
        ){
            return res.status(400).json({
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