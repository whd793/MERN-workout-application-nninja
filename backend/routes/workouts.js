const express = require("express");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  console.log("this is the workout route");
  res.send("hello");
});

//GET a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "single workout" });
});

//POST a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});

//DELETE
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

//UPDATE
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE" });
});

module.exports = router;
