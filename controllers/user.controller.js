import {UserModel} from "../models/user.model.js";

class UserController{

    async sayhello(request,response){
        return response.status(200).json({
            ok:true,
            message:'hello'
        });
    }
    async getUsers(request,response){
        try{
            const users = await UserModel.findAll({
                logging:console.log
            });
            return response.status(200).json({
                ok:true,
                data:users
            });
        }catch (e){
            return response.status(500).json({
                ok:false,
                error:e
            })

        }
    }
}
export const userController = new UserController();
