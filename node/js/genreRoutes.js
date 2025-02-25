const express = require("express");
const router = express.Router();
const { handleRPC } = require("./supabase.js");

router.get("/", (req, res) => handleRPC("get_genres", {}, res));

router.get("/:ref", (req, res) =>
  handleRPC("get_genre_by_id", { genre_id: req.params.ref }, res)
);

router.get("/painting/:ref", (req, res) =>
  handleRPC("genre_in_painting", { painting_id: req.params.ref }, res)
);

module.exports = router;
