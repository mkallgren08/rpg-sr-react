const router = require("express").Router();
const biowareController = require("../../controllers/biowareController");

// Matches with "/api/bioware"
router.route("/")
  .get(biowareController.findAll)
  .post(biowareController.create);

// Matches with "/api/bioware/:id"
router
  .route("/:id")
  .get(biowareController.findById)
  .put(biowareController.update)
  .delete(biowareController.remove);

module.exports = router;
