const express = require("express");
const app = express();

const countRoutes = require("./countRoutes");
const genreRoutes = require("./genreRoutes");
const paintingRoutes = require("./paintingRoutes");
const artistsRoutes = require("./artistsRoutes");
const galleryRoutes = require("./galleryRoutes");

app.use("/api/counts", countRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/paintings", paintingRoutes);
app.use("/api/artists", artistsRoutes);
app.use("/api/galleries", galleryRoutes);

//Error Route
app.use("/*", (req, res) => {
  res.status(404).json({ error: "Incorrect API endpoint" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
