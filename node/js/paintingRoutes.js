const express = require("express");
const router = express.Router();
const { handleRPC } = require("./supabase.js");

router.get("/", (req, res) => handleRPC("get_paintings", {}, res));

router.get("/sort/:value", (req, res) =>
  handleRPC("get_paintings_custom_sort", { sort: req.params.value }, res)
);

router.get("/:ref", (req, res) =>
  handleRPC("painting_by_ref", { painting_id: req.params.ref }, res)
);

router.get("/search/:substring", (req, res) =>
  handleRPC(
    "painting_by_substring",
    { given_substring: req.params.substring },
    res
  )
);

router.get("/years/:start/:end", (req, res) =>
  handleRPC(
    "painting_between_years",
    { start_year: req.params.start, end_year: req.params.end },
    res
  )
);

router.get("/galleries/:ref", (req, res) =>
  handleRPC("painting_by_gallery_id", { gallery_id: req.params.ref }, res)
);

router.get("/artists/:ref", (req, res) =>
  handleRPC("painting_by_artist_id", { artist_id: req.params.ref }, res)
);

router.get("/artists/country/:country", (req, res) =>
  handleRPC("painting_by_country", { country: req.params.country }, res)
);

router.get("/era/:ref", (req, res) =>
  handleRPC("get_paintings_by_era", { era_id: req.params.ref }, res)
);

router.get("/genre/:ref", (req, res) =>
  handleRPC("get_paintings_by_genre", { genre_id: req.params.ref }, res)
);

module.exports = router;
