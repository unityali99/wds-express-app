const express = require("express");
const router = express.Router();
const users = [{ name: "Ali" }, { name: "Sara" }];

router.use(logger);

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Ali" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ name: req.body.firstName });
    res.redirect(`users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID => ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Put user with ID => ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID => ${req.params.id}`);
  });

//middleware !
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
