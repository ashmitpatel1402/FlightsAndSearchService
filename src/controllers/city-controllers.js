const CityService=require('../services/city-service');
const cityservice=new CityService();
//POST, data->req.body
const create=async (req,res)=>{
    try{
          const city=await cityservice.createCity(req.body);
          return res.status(201).json({
            data:city,
            sucess:true,
            message:'Successfully created a city',
            err:{}
          });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to create a city',
            err:error
        });
    }
}
//delete url_>/city/:id
const destroy=async (req,res)=>{
    try{
        const response=cityservice.deleteCity(req.params.id);
        return res.status(200).json({
           data:response,
           success:true,
           message:'Successfully deleted a city',
           err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to delete a city',
            err:error
         });
    }
}
//get req  /city/:id
const get=async (req,res)=>{
    try{
        const response=cityservice.getCity(req.params.id);
        return res.status(200).json({
           data:response,
           success:true,
           message:'Successfully fetched a city',
           err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to fetch a city',
            err:error
         });
    }

}
//Patch req   ->/city/:id and req.body
const update=async (req,res)=>{
    try{
        const response=cityservice.updateCity(req.params.id,req.body);
        return res.status(200).json({
           data:response,
           success:true,
           message:'Successfully updated a city',
           err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update a city',
            err:error
         });
    }
}
    const getAll=async(req,res)=>{
        try{
        const cities=await cityservice.getcities();
        return res.status(200).json({
             data:cities,
             success:true,
             message:"Successfully fetched all cities",
             err:{}
        });
        }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the cities',
            err:error
         });

        }
    }



module.exports={
    create,
    update,
    get,
    destroy,
    getAll
}