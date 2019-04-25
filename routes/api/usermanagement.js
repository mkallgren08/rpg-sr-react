const router = require("express").Router();
const userController = require("../../controllers/usermanagementController");

// All entries on this page match with "/api/users/"

// Matches with "/api/users/:email"
router.route("/:email")
  .get(userController.checkStatus)

// Matches with "/api/users/"
router.route("/")
  .post(userController.createUser)
  .put(userController.updateUser)

//Matches with "/api/users/:id"
module.exports = router;