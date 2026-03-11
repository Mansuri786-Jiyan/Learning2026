const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.json({ "name": "Ahmedabad" });
});
// router.put("/:id", updateCity);


module.exports = router;