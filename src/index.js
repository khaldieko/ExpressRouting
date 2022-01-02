import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path"
import timecheck from "./Middleware/timecheck.js";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


const __dirname = new URL('.', import.meta.url).pathname;
const options= path.join(__dirname)

app.get("/", timecheck, (req, res) => {
  res.sendFile(path.resolve(options, "./Public/Home.html"))
});

app.get("/ContactUs", (req, res) => {
  res.sendFile(path.resolve(options, "./Public/ContactUs.html"))
});

app.get("/OurServices", (req, res) => {
  res.sendFile(path.resolve(options, "./Public/OurServices.html"))
});

app.listen(PORT, () => {
  console.log(`Server connected at  http://localhost:${PORT}`);
});
