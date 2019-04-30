const router = require("express").Router();
const cyberwareController = require("../../controllers/cyberwareController");

// Matches with "/api/cyberwares"
router.route("/")
  .get(cyberwareController.findAll)
  .post(cyberwareController.create);

// Matches with "/api/cyberwares/:id"
router
  .route("/:id")
  .get(cyberwareController.findById)
  .put(cyberwareController.update)
  .delete(cyberwareController.remove);

module.exports = router;
