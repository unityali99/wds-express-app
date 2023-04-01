const express = require("express");

const app = express();
const userRouter = require("./routes/users");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// app.use(logger);

// app.get("/", (req, res) => {
//   res.render("index", { text: "World" });
// });

app.use("/users", userRouter);

app.listen(3000);
