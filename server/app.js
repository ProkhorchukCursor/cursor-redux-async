const express = require("express");
const cors = require("cors");

const usersRouter = require("./routes/users/users");
const newsRouter = require("./routes/news/news");

const { HTTP_CODE } = require("./config/constants");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/news", newsRouter);

app.use((_req, res) => {
 res.status(HTTP_CODE.FORBIDDEN).json({ message: "Not found" });
});

app.use((err, _req, res, _next) => {
 res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).json({ message: err.message });
});

module.exports = app;
