import {Router} from "express";
import userAccountController from "../controillers/userAccount.controller.js";
import validate from "../middlewares/validation.middleware.js";
import ownerOrAdmin from "../middlewares/ownerOrAdmin.middleware.js";
import onlyAdmin from "../middlewares/onlyAdmin.middleware.js";

const router = Router();


router.post('/register', validate('register'), userAccountController.register);
router.post('/login', userAccountController.login);
router.delete('/user/:user',ownerOrAdmin('user'), userAccountController.deleteUser);
router.patch('/user/:user', validate('updateUser'), userAccountController.updateUser);
router.patch('/user/:user/role/:role',onlyAdmin, validate('changeRoles', 'params'), userAccountController.addRole);
router.delete('/user/:user/role/:role',onlyAdmin, validate('changeRoles', 'params'), userAccountController.deleteRole);
router.patch('/password', userAccountController.changePassword);
router.get('/user/:user', userAccountController.getUser);




export default router;
