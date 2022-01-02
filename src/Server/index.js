import express from "express";
import cors from "cors";
import morgan from "morgan";

const port = 3000;
const hostname = "localhost";

const app = express();
app.use(cors);
app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  //res.render("index.html");
  res.json({ message: "hi" });
});

app.listen(port,hostname, () => {
  console.log(`server is running on http://${hostname}:${port}`);
});
