const express = require("express");
const app = express();
const mongoose = require('mongoose')
require("dotenv").config()

const userRoute = require("./routes/user.routes");
app.use(express.json());

//Student Route
app.use("/api", userRoute);

mongoose
    .connect(process.env.MONGO_CONNECTION)
    .then(() => {
        console.log("connected to MongoDB Atlas");
        app.listen(3000, () => {
            console.log(`Node API app is running on port 3000`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

