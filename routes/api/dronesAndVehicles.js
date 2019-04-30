const router = require("express").Router();
const droneAndVehicleController = require("../../controllers/droneAndVehicleController");

// Matches with "/api/droneAndVehicle"
router.route("/")
  .get(droneAndVehicleController.findAll)
  .post(droneAndVehicleController.create);

// Matches with "/api/droneAndVehicle/:id"
router
  .route("/:id")
  .get(droneAndVehicleController.findById)
  .put(droneAndVehicleController.update)
  .delete(droneAndVehicleController.remove);

module.exports = router;
