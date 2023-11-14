// const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./App");

// DB Connection
// mongoose.connect(process.env.DB_URL).then(() => {
//     console.log("DB Connected");
// });
// or Call DBHandler

// Server
const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
