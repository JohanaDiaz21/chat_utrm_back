import express  from 'express';
import {UserModel} from "../models/user.model.js";
import {userController} from "../controllers/user.controller.js";

export class routes{
    routes(app= express.application){
        //aqui declaran todas las rutas

        app.get('/say-hello',userController.sayhello);

        app.get('/getUsers',userController.getUsers);

        app.post('/api/create-user',userController.createUser);


        app.get('/' ,(req, res) =>{
            res.send( "hola mundo");
        });

    }

}
export const Routes = new routes();
