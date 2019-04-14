const router = require("express").Router();
const armorController = require("../../controllers/armorController");

  // Matches with "/api/armoraddons"
router.route("/")
.get(armorController.findAllArmorAddOns)
.post(armorController.createArmorAddOns);

// Matches with "/api/armoraddons/:id"
router
.route("/:id")
.get(armorController.findArmorAddOnsById)
.put(armorController.updateArmorAddOns)
.delete(armorController.removeArmorAddOns);

module.exports = router;
