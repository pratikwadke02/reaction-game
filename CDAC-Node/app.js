const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const reactionRouter = require("./routes/apiRoutes/reaction_route");
const webRoutes = require("./routes/webRoutes/webroute");
app.set("view engine", "ejs");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/v1", reactionRouter);
app.use(webRoutes);

mongoose.set("strictQuery", true);

const CONNECTIONS_URL =
  "mongodb+srv://sahil123:sahil123@cluster0.xhl0k.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose
  .connect(CONNECTIONS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
