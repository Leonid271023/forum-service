import {ADMIN} from "../config/constants.js";

const onlyAdmin = (req, res, next) => {
    if (!req.principal) {
        return res.status(401).json({ message: 'Authorization required' });
    }
    const {roles} = req.principal;
    if (roles.includes(ADMIN)) {
        return next();
    }
    return res.status(403).json({ message: 'Access denied: insufficient permissions' });
}
export default onlyAdmin;