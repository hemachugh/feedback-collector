const express = require("express");

const rootController = require("../controllers/root");
const router = express.Router();
router.get("/", rootController.getRootPage);
router.post("/:id", rootController.editFeedback);
module.exports = router;
