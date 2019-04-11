const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const pino = require("pino");
const cors = require("cors");

const gameMediaRouter = require("./game-media/game-media.router");

const app = express();

// addons
app.use(morgan("dev"));
// app.use(pino);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const defaultRouter = new express.Router();
defaultRouter.get("/test", function (req, res) {
  res.json({
    json: true
  });
  
});

// api routers
app.use("", defaultRouter);
app.use("/api/game", gameMediaRouter);


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
