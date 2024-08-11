const indexRouter = require("./src/routers/indexRoute");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT;
const API_URL = process.env.API_URL;
const corsOptions = {
  origin: ['http://localhost:8082', 'https://fetetsu.vercel.app', 'https://tetsuberkahtralis-a8d9303c3210.herokuapp.com/'],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization, *',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(`/${API_URL}`, indexRouter);
// app.use(cors());
// Tambahkan rute dasar
app.get("/", (req, res) => {
  res.send("Server berjalan dengan baik");
});

app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`);
});