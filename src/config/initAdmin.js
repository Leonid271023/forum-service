import UserAccount from '../models/user.model.js';
import {ADMIN, USER, MODERATOR} from "./constants.js";

export async function  createAdmin(){
    let admin = await UserAccount.findById('admin');
    if (!admin){
        admin = new UserAccount(
            {login: 'admin',
                password: 'admin',
                firstName: 'Administrator',
                lastName: 'Administrator'
                , roles: [USER,ADMIN,MODERATOR]
            });
        await admin.save();
    }
}