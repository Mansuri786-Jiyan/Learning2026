const express = require("express");
const router = express.Router();
const stateController = require("../controller/stateController");

router.post("/create", stateController.createState);
router.get("/", stateController.getAllStates);
router.get("/:id", stateController.getStateById);
router.delete("/:id", stateController.deleteState);

module.exports = router;