const express = require("express");
const {
  postFlatData,
  getAllflats,
  getAllData,

  editFlate,
  deleteFlate,
} = require("../controllers/FlatData.controller");
const router = express.Router();

router.post("/flat", postFlatData);

router.get("/flats/all", getAllflats);

router.get("/all", getAllData);

router.post("/flate/edit/:id", editFlate);

router.delete("/flate/delete/:id", deleteFlate);

module.exports = router;
