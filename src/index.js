import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "hello world",
  });
});

app.listen(PORT, () => {
  console.log(`Server connected at  http://localhost:${PORT}`);
});
