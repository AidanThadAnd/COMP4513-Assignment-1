const express = require("express");
const router = express.Router();
const { handleRPC } = require("./supabase.js");

router.get("/", (req, res) => handleRPC("get_artists", {}, res));

router.get("/:ref", (req, res) =>
  handleRPC("artist_by_ref", { artist_id: req.params.ref }, res)
);

router.get("/search/:lastname", (req, res) =>
  handleRPC("get_artists_by_lastname", { lname: req.params.lastname }, res)
);

router.get("/country/:national", (req, res) =>
  handleRPC("get_artists_by_nationality", { nation: req.params.national }, res)
);



module.exports = router;
