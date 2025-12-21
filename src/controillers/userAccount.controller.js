import UserAccountService from "../services/userAccount.service.js";

//dont do login and change password


class UserAccountController {
    async register(req, res, next) {
        try {
            const userAccount = await UserAccountService.register(req.body);
            return res.status(201).json(userAccount);
        } catch (err) {
            return next(err);
        }
    }


    async login(req, res, next) {
        // TODO login in controller
    }


    async deleteUser(req, res, next) {
        try {
            const userAccount = await UserAccountService.removeUser(req.params.user);
            return res.json(userAccount);
        } catch (err) {
            return next(err);
        }
    }


    async updateUser(req, res, next) {
        try {
            const userAccount = await UserAccountService.updateUser(req.params.user, req.body);
            return res.json(userAccount);
        } catch (err) {
            return next(err);
        }
    }


    async addRole(req, res, next) {
        const {user, role} = req.params;
        try {
            const userRoles = await UserAccountService.changeRoles(user, role, true);
            return res.json(userRoles);
        } catch (err) {
            return next(err);
        }
    }


    async deleteRole(req, res, next) {
        const {user, role} = req.params;
        try {
            const userRoles = await UserAccountService.changeRoles(user, role, false);
            return res.json(userRoles);
        } catch (err) {
            return next(err);
        }
    }


    async changePassword(req, res, next) {
        // TODO change password in controller
    }


    async getUser(req, res, next) {
        try {
            const userAccount = await UserAccountService.getUser(req.params.user);
            return res.json(userAccount);
        } catch (err) {
            return next(err);
        }
    }
}


export default new UserAccountController();
