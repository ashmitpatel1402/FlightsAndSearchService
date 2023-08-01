//const dotenv=require('dotenv');
require('dotenv').config();
console.log(process.env.PORT);
module.exports={
  PORT:process.env.PORT
}