const { Router } = require("express");
const path = require("path");

let router = new Router();

router.get("/image", function (req, res) {
  const image = "../../assets/images/image1.jpeg";

  res.set("Content-Type", "image/jpeg");
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  const imageFile = path.join(__dirname, image);
  res.sendFile(imageFile, {}, (err) => {
    if (err)
      console.log(`unable to fetch image, with: ${err}`);
  });
});

const BASE_ASSETS = "../../assets/videos/";
const VIDEOS = {
  V1: "mc.mp4",
  V2: "McDonalds.mp4"
};

let currentImage = VIDEOS.V2;

router.get("/video", function (req, res) {
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  res.set("Content-Type", "video/mp4");

  console.log(`Current Video fetched: ${currentImage}`);
  const videoFile = path.join(__dirname, `${BASE_ASSETS}${currentImage}`);
  res.sendFile(videoFile, {}, (err) => {
    if (err)
      console.log(`unable to fetch image, with: ${err}`);
  });
});

module.exports = router;