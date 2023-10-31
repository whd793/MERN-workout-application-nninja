require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts.js");

const app = express();

//will fire for every request that comes in MIDDLEWARES
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//ROUTES
app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("success connected mongoose");
    app.listen(process.env.PORT, () => {
      console.log("listening on port 4000!");
    });
  })
  .catch((e) => {
    console.log(e);
  });
// app.get("/", (req, res) => {
//   res.json({ mssg: "Welcome to the apppppp" });
// });
