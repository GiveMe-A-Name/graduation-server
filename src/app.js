const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const handleNotFound = require("./errors/handleNotfound");
const handleAnyError = require("./errors/handleAnyError");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const newsRouter = require("./routes/news");
const teachersRouter = require("./routes/teachers");
const coursesRouter = require("./routes/courses");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/news", newsRouter);
app.use("/teachers", teachersRouter);
app.use("/courses", coursesRouter);

// catch 404 and forward to error handler
app.use(handleNotFound);

// error handler
app.use(handleAnyError);

module.exports = app;
