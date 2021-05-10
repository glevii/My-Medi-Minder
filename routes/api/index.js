const router = require("express").Router();
const userRoutes = require("./user");
const medRoutes = require("./meddetails");

// Profile routes
router.use("/user", userRoutes);
router.use("/med", medRoutes);

module.exports = router;
