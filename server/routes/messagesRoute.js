const { addMessage, getAllMessage } = require("../controllers/messagesController");

const router = require("express").Router();

router.post("/addMsg", addMessage);
router.post("/getmsg", getAllMessage);

module.exports = router;