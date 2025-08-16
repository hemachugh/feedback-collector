const express = require("express");
const adminControllers = require("../controllers/admin");

const router = express.Router();

router.get("/feedback", adminControllers.getAllFeedbacks);
router.post("/feedback", adminControllers.addFeedback);
router.post("/deleteFeedback/:id", adminControllers.deleteFeedback);
router.post("/updateFeedback/:id", adminControllers.updateFeedback);

module.exports = router;
