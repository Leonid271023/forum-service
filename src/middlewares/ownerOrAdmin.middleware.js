import {ADMIN} from "../config/constants.js";


export default function ownerOrAdmin(paramName = 'user') {
    return (req, res, next) => {
        if (!req.principal) {
            return res.status(401).json({ message: 'Authorization required' });
        }

        const targetUser = req.params[paramName];
        const isOwner = req.principal.username === targetUser;
        const isAdmin = req.principal.roles.includes(ADMIN);

        if (!isOwner && !isAdmin) {
            return res.status(403).json({ message: 'Access denied: insufficient permissions' });
        }
        return next();
    };
}