const router = require("express").Router();
const testdataRoutes = require('./testdata.js');
const usersRoutes = require("./usermanagement.js")
const ammoRoutes = require("./ammo.js")
const armorRoutes = require("./armor.js")
const armorModRoutes = require("./armormods.js")
const armorAddOnRoutes = require("./armoraddons.js")
const attrsRoutes = require("./attrs.js")
const biowareRoutes = require('./bioware.js')
const bundleRoutes = require("./bundles.js")

//  routes
//router.use("/testdata", testdataRoutes);

// 'a' Routes
router.use("/ammo", ammoRoutes)
router.use("/armor", armorRoutes)
router.use("/armormods", armorModRoutes)
router.use("/armoraddons", armorAddOnRoutes)
router.use("/attrs", attrsRoutes)

// 'b' Routes
router.use('/bioware', biowareRoutes)
router.use("/bundle", bundleRoutes)

// 'u' Routes
router.use("/users", usersRoutes)

module.exports = router;
