import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

const CONNECTIONS_URL =
  "mongodb+srv://acensonix:fNxd4PWrWKdNocT4@cluster0.xhl0k.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
// mongoose.set('strictQuery', true);
mongoose
  .connect(CONNECTIONS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });
