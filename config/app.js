import dotenv from 'dotenv';
import express  from 'express';
//import {Routes} from "../routes/routes.js";
import {Database} from './database.js';
import {Routes} from "../routes/routes.js";

// inicio config

dotenv.config();

class App{

app = express.application;
//routes= new Routes();
db = new Database();


  constructor() {
      this.initializeApp();
  }

async initializeApp(){
      this.app = express();
      this.config();
      await this.database();
      Routes.routes(this.app);
  }

  config(){
      this.app.use(
          express.urlencoded({
              extended: true
          }));
      this.app.use(express.json())
      }

      // conecion a la base de datos
      async database() {
          let connection = await this.db.connection();
          console.log(connection.message)
      }

}
export default new App();
