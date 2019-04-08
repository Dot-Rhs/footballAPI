var express = require("express");
const Player = require("../models/players");
var router = express.Router();

/* GET players listing. */
router.get("/", async (req, res, next) => {
  const players = await Player.find({});
  res.json({ payload: players });
});

// GET a player by id
router.get("/:id", async (req, res, next) => {
  const player = await Player.findOne({ ID: req.params.id });
  res.json({ payload: player });
});

// POST a new player
router.post("/", async (req, res, next) => {
  const player = new Player(req.body);
  await player.save();
  res.json({ payload: player });
});

module.exports = router;
