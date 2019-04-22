const router = require("express").Router();
const charController = require("../../controllers/charmanagementController");

// All entries on this page match with "/api/chars/"

// Matches with "/api/chars/<selector>/:id"
router.route("/char/:id")
  .get(charController.findById)
router.route("/user/:id")
  .get(charController.findByUser)
// Matches with "/api/chars/"
router.route("/char")
  .post(charController.create)

// Matches with "/api/chars/"
router.route("/")
  .get(charController.findAll)
//Matches with "/api/chars/:id"
module.exports = router;