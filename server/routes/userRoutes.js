const { setimageRoute } = require("../../public/src/utils/APIRoutes");
const { register } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setImage/:id", setimage);
router.get("/allUsers/:id", getAllUsers);

module.exports = router;