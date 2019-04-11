const { Router } = require("express");
const path = require("path");

let router = new Router();

router.get("/image", function (req, res) {
  const image = "../../assets/images/image1.jpeg";

  res.set("Content-Type", "image/jpeg");
  const imageFile = path.join(__dirname, image);
  res.sendFile(imageFile, {}, (err) => {
    console.log(`unable to fetch image, with: ${err}`);
  });
});

router.get("/video", async function (req, res) {
  const image = "../../assets/videos/McDonalds.mp4";

  res.set("Content-Type", "video/mp4");
  const imageFile = path.join(__dirname, image);
  await res.sendFile(imageFile, {}, (err) => {
    if (err)
      console.log(`unable to fetch image, with: ${err}`);
  });
});

module.exports = router;