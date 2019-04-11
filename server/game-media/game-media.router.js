const { Router } = require("express");
const path = require("path");
const fs = require("fs");

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


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

const BASE_ASSETS = "../../assets/";
const VIDEOS = {
  V1: "videos/mc.mp4",
  V2: "videos/McDonalds.mp4"
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

const DEFAULT_IMAGE_PATH = "images/image1.jpeg"

router.post("/new", upload.single('file'), function (req, res) {
  const fileContent = fs.readFileSync(req.file.path);
  const defaultImagePath = path.join(__dirname,`${BASE_ASSETS}${DEFAULT_IMAGE_PATH}`);
  fs.writeFileSync(defaultImagePath, fileContent, {
    flag: "w"
  });
  res.status(204);
});


module.exports = router;