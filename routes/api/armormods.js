const router = require("express").Router();
const armorController = require("../../controllers/armorController");


// Matches with "/api/armor/mods"
router.route("/")
  .get(armorController.findAllArmorMods)
  .post(armorController.createArmorMods);

// Matches with "/api/armor/mods/:id"
router
  .route("/:id")
  .get(armorController.findArmorModsById)
  .put(armorController.updateArmorMods)
  .delete(armorController.removeArmorMods);

  // Matches with "/api/armor/addons"
router.route("/addons")
.get(armorController.findAllArmorAddOns)
.post(armorController.createArmorAddOns);

// Matches with "/api/armor/addons/:id"
router
.route("/addons/:id")
.get(armorController.findArmorAddOnsById)
.put(armorController.updateArmorAddOns)
.delete(armorController.removeArmorAddOns);

module.exports = router;
