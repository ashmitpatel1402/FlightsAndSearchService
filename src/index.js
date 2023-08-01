const express=require('express');
const bodyParser=require('body-parser');
require('dotenv').config();
const PORT=process.env.PORT;
//const CityRepository=require('./repository/city-repository');
const setupAndStartServer=async ()=>{
    //creating express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
    });

}
setupAndStartServer();