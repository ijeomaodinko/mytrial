const { register, login } = require("../controllers/usersController");
const { setImage, getAllUsers } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setImage/:id", setImage);
router.get("/allUsers/:id", getAllUsers);

module.exports =  router;