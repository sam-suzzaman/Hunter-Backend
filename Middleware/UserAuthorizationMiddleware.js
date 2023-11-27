const userAuthorizationHandler = (...role) => {
    return (req, res, next) => {
        const userRole = req?.user?.role;
        console.log(userRole);

        if (!role.includes(userRole)) {
            return res.status(403).json({
                status: false,
                message: "You are not an Authorized User",
            });
        }
        next();
    };
};

// module.exports = userAuthorizationHandler;
module.exports = {
    userAuthorizationHandler: userAuthorizationHandler,
};
