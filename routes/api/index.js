const router = require("express").Router();
const testdataRoutes = require('./testdata.js');
const usersRoutes = require("./usermanagement.js")

//  routes
//router.use("/testdata", testdataRoutes);

router.use("/users", usersRoutes)

module.exports = router;
