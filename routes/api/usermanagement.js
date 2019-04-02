const router = require("express").Router();
const userController = require("../../controllers/usermanagementController");

// Matches with "/api/users/checkstatus"
router.route("/checkstatus/:email")
  .get(userController.checkStatus)
  
module.exports = router;