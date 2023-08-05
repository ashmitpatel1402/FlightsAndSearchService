#Welcome to Flight service

##Project Setup
-clone the project on your local device
-execute `npm install` on the same path as of your root directory of the download project.
-Create a `.env` file in root directory and add following environment variables
      `PORT 3000`
-Inside the src/config folder create a new file config.json and add the necessary user name password and database name.
-Once you have executed above steps go to src folder on your command terminal and execute
          `npx sequelize db:create'

##Tables

City->name,id,created_at,updated_at

Airport->id,name,address,cityId,created_at,updated_at(1:n relation as a city has many airports)

npx sequelize model:generate --name Airport --attributes
name string,address string,cityId integer

To create a seed file we use the following command
  >npx sequelize seed:generate --name add-airplanes

  now indide this the commented text shown the syntax once you have filled all the required data

use
  npx sequelize db:seed:all