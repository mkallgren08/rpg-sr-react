const router = require("express").Router();
const credstickController = require("../../controllers/credstickController");

// Matches with "/api/credsticks"
router.route("/")
  .get(credstickController.findAll)
  .post(credstickController.create);

// Matches with "/api/credsticks/:id"
router
  .route("/:id")
  .get(credstickController.findById)
  .put(credstickController.update)
  .delete(credstickController.remove);

module.exports = router;
