const router = require("express").Router();
const ammoController = require("../../controllers/attrsController");

// Matches with "/api/attrs"
router.route("/")
  .get(ammoController.findAll)

module.exports = router;