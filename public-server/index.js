const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const path = require("path");
const tokenService = require("./services/tokenService");
const authService = require("./services/authService");

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(tokenService.receiveToken);
app.use(express.static(__dirname + "/public/build"));

app.use(bodyParser.urlencoded({ extended: false }));

const userRouter = require("./controllers/users");
app.use("/users", userRouter);

// app.get("/isLoggedIn", authService.isLoggedIn, (req, res) => {
//   res.json({
//     isLoggedIn: res.locals.isLoggedIn,
//     user: res.locals.user
//   });
// });

const productRouter = require("./controllers/products");
app.use("/products", productRouter);

const featureRouter = require("./controllers/features");
app.use("/features", featureRouter);

const companyRouter = require("./controllers/companies");
app.use("/companies", companyRouter);

const activityRouter = require("./controllers/activities");
app.use("/activities", activityRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/build/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
