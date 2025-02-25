const express = require("express");
const router = express.Router();
const { handleRPC } = require("./supabase.js");

router.get("/topgenres/:ref", (req, res) =>
  handleRPC("top_genre_count", { min_num_paintings: req.params.ref }, res)
);

router.get("/artists", (req, res) =>
  handleRPC("get_artist_painting_counts", {}, res)
);

router.get("/genres", (req, res) =>
  handleRPC("get_number_of_paintings_by_genre", {}, res)
);

module.exports = router;
