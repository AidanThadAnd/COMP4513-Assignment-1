const express = require("express");
const router = express.Router();
const { handleRPC } = require("./supabase.js");

router.get("/eras", (req, res) => handleRPC("Retrieve_Era_Names", {}, res));

router.get("/", (req, res) => handleRPC("get_galleries", {}, res));

router.get("/:ref", (req, res) =>
  handleRPC("get_gallery_by_id", { gallery_id: req.params.ref }, res)
);

router.get("/country/:substring", (req, res) =>
  handleRPC(
    "get_galleries_by_country",
    { country_substring: req.params.substring },
    res
  )
);

module.exports = router;
