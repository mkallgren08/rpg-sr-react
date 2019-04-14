const router = require("express").Router();
const testdataRoutes = require('./testdata.js');
const usersRoutes = require("./usermanagement.js")
const ammoRoutes = require("./ammo.js")
//  routes
//router.use("/testdata", testdataRoutes);

router.use("/users", usersRoutes)
router.use("/ammo", ammoRoutes)

module.exports = router;
