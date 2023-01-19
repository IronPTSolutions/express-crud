const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home.controller");
const users = require("../controllers/users.controller");

router.get("/", homeController.home);

router.get("/users", users.list);
router.post("/users", users.create);
router.get("/users/:id", users.detail);
router.post("/users/:id/update", users.create);
router.post("/users/:id/delete", users.create);

module.exports = router;
