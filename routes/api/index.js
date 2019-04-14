const router = require("express").Router();
const testdataRoutes = require('./testdata.js');
const usersRoutes = require("./usermanagement.js")
const ammoRoutes = require("./ammo.js")
const armorRoutes = require("./armor.js")
const armorModRoutes = require("./armormods.js")
const armorAddOnRoutes = require("./armoraddons.js")
const bundleRoutes = require("./bundles")
//  routes
//router.use("/testdata", testdataRoutes);

router.use("/users", usersRoutes)
router.use("/ammo", ammoRoutes)
router.use("/armor", armorRoutes)
router.use("/armormods", armorModRoutes)
router.use("/armoraddons", armorAddOnRoutes)
router.use("/bundle", bundleRoutes)

module.exports = router;
