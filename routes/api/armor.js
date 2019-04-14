const router = require("express").Router();
const armorController = require("../../controllers/armorController");

// Matches with "/api/armor/all"
router.get("/all")
  .get(armorController.findAll)

// Matches with "/api/armor"
router.route("/")
  .get(armorController.findAllArmor)
  .post(armorController.createArmor);

// Matches with "/api/armor/:id"
router
  .route("/:id")
  .get(armorController.findArmorById)
  .put(armorController.updateArmor)
  .delete(armorController.removeArmor);


// Matches with "/api/armor/mods"
router.route("/mods")
  .get(armorController.findAllArmorMods)
  .post(armorController.createArmorMods);

// Matches with "/api/armor/mods/:id"
router
  .route("/mods/:id")
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
