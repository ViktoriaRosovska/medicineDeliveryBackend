const express = require("express");
const ctrl = require("../controllers/drugs");

// const { uploadDrinkThumb } = require("../../services/cloudinaryService");

const router = express.Router();

router.get("/drugs", ctrl.getDrugs);
router.get("/drugs/:id", ctrl.getDrugById);
module.exports = router;
