const router = require("express").Router();
const { userController } = require("../controller");

router.post("/signup", userController.signup.post);

router.post("/signin", userController.signin.post);

router.post("/signout", userController.signout.post);

router.post("/infoDay", userController.infoDay.post);

router.post("/infoWeek", userController.infoWeek.post);

router.post("/infoMonth", userController.infoMonth.post);

module.exports = router;
