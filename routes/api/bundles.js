const router = require("express").Router();
const armorController = require("../../controllers/armorController");

// Matches with "/api/bundle/armor"
router.route("/armor")
  .get(armorController.findAll)

// // Matches with "/api/biodiversity/:id"
// router
//   .route("/:id")
//   .get(armorController.findById)
//   .put(armorController.update)
//   .delete(armorController.remove);

module.exports = router;