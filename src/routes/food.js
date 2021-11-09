const { Router } = require("express");
const router = Router();

const food = require("../data.json");

router.get("/", (req, res) => {
  res.json(food);
});

module.exports = router;
