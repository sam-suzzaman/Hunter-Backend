const userAuthorizationHandler = (...role) => {
    return (req, res, next) => {
        const userRole = req?.user?.role;
        console.log(role);
        console.log(userRole);

        if (!role.includes(userRole)) {
            return res.status(403).json({
                status: false,
                message: "You don't have permission",
            });
        }
        next();
    };
};

// module.exports = userAuthorizationHandler;
module.exports = {
    userAuthorizationHandler: userAuthorizationHandler,
};
