const router = require("express").Router();
const medController = require("../../controllers/medController");
const { Med } = require("../../models");

router.post("/med", medController.create)
     .get("/med", medController.findAll)
 // Endpoint to get current user
router.get('/med/:id', medController.findByID)

 module.exports = router;