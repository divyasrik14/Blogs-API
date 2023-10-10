const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const router = require("./routes/router");
const connectDB = require("./db/connect");

dotenv.config();

const url = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use("/", router);

const start = async () => {
  try {
    await connectDB(url);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
