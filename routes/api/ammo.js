const router = require("express").Router();
const ammoController = require("../../controllers/ammoController");

// Matches with "/api/ammo"
router.route("/")
  .get(ammoController.findAll)
  .post(ammoController.create);

// Matches with "/api/ammo/:id"
router
  .route("/:id")
  .get(ammoController.findById)
  .put(ammoController.update)
  .delete(ammoController.remove);

module.exports = router;
