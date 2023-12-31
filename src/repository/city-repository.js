const {Op}=require('sequelize');
const {City}=require('../models/index');

class CityRepository{
    async createCity({name}){//destructuring the object
        try{
            const city=await City.create({name});
            return city;
        } catch(error){
            console.log("Something went wrong in repository layer");
            throw{error};
        }
    }
    async deleteCity({cityId}){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        }catch(error){
            console.log("Something went wrong in repository layer");
            throw{error};
        }
    }
    async getCity({cityId}){
        try{
            const city=await City.findByPk(cityId);
            return city;
        }
        catch(error){
            console.log("Something went wrong in repository layer");
            throw{error};
        }
    }
    async updateCity(cityId,data){//data{name:"Prayagraj"} is an object with all things you wish to update
        try{
              const city=await City.update(data,{
                where:{
                    id:cityId
                }
              });
              return city;
        }
        catch(error){
            console.log("Something went wrong in repository layer");
            throw{error};
        }
    }
    async getcities(filter){
        try{
            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                });
                return cities;
            }
            const cities=await City.findAll();
            return cities;
        }catch(error){
            console.log("Something wrong in repository layer");
            throw{error};
        }
    }
}

module.exports=CityRepository;