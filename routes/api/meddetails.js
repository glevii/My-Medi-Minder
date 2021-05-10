const router = require("express").Router();
const medController = require("../../controllers/medController");
const { Med } = require("../../models");

router.post("/", medController.create)
     .get("/", medController.findAll)
 // Endpoint to get current user
router.get('/:id', medController.findByID)

 module.exports = router;