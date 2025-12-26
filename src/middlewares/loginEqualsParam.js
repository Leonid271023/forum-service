const loginEqualsParam = (paramName) => (req, res, next) => {
    if (!req.principal) {
        return res.status(401).json({ message: 'Authorization required' });
    }

    if (req.params[paramName] !== req.principal.username) {
        return res.status(403).json({ message: 'Access denied: insufficient permissions' });
    }

    return next();
}

export default loginEqualsParam;