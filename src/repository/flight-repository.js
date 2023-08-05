const {Flights}=require('../models/index');
//const{ AIRPLANE }=require('../repository/airplane-repository');
const {Op}=require('sequelize');


class flightRepository{
   //private member function
    #createFilter(data){   
        //for arrival and departure id can use let filter={...data};
          let filter={};
          if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
          }
          if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
          }

          let filterPrice=[];
          if(data.minPrice){
            filterPrice.push({price:{[Op.gte]:data.minPrice}});
          }
          if(data.maxPrice){
            filterPrice.push({price:{[Op.lte]:data.maxPrice}});
          }
          Object.assign(filter,{[Op.and]:filterPrice});

          return filter;

    }

    async createFlight(data){
        try{
             const flight=await Flights.create(data);
             return flight;
        }catch(error){
            console.log("Something wrong in repository layer");
            throw{error};
        }
    }

    async getFlight(flightId){
        try{
            const flight=await Flights.findByPk(flightId);
            return flight;
        }catch(error){
            console.log("Something wrong in repository layer");
            throw{error};
        }
    }

    async getAllFlights(filter){
        try{
            //Custom filters
            const filterObject=this.#createFilter(filter);//created fiter object because mathematical operation like minprice property cannot be handled directly
            const flight=await Flights.findAll({
                where:filterObject
            });
            return flight;
        }catch(error){
            console.log("Something wrong in repository layer");
            throw{error};
        }
    }
}


module.exports=flightRepository;