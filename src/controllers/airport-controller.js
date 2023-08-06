const {AirportService}=require('../services/index');
const airportService=new AirportService();
const create=async(req,res)=>{
    try{
        const response=await airportService.create(req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:"Successsfully created an Airport",
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Cannot create a new Airport",
            err:error
        });
    }
}

const update=async(req,res)=>{
    try{
        const response=await this.airportService.update(req.params.id,req.body);
        return res.status(500).json({
            data:response,
            success:true,
            message:"Successfully updated the airport",
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Cannot create a new Airport",
            err:{}
        });
    }
}
module.exports={
    create,
    update
}

