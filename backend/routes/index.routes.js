const router = require("express").Router();
const User = require("../models/User.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/users/all", (req, res) => {
  User.find().then((results) => {
    res.json(results);
  });
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
