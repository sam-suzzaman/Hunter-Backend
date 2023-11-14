const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./App");

// DB Connection
const DBConnectionHandler = require("./Utils/DBconnect");
DBConnectionHandler();

const port = process.env.PORT || 2000;

// 404 Error handler
app.use("*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
});

// Error Handeling Middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: "Something went wrong" });
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
