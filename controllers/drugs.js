const { HttpError, controllerWrapper } = require("../helpers");
const { Drug, schemas } = require("../models/drug");

// const path = require("path");
// const fs = require("fs/promises");

const getDrugs = async (req, res) => {
  const totalCount = await Drug.count();
  const result = await Drug.find();
  res.json({
    code: 200,
    message: "Success operation",
    totalCount: totalCount,
    drugs: result,
  });
};

const getDrugById = async (req, res) => {
  const { id } = req.params;
  const drugById = await Drug.findById(id);
  if (!drugById) {
    throw HttpError(404, "Not Found");
  }
  res.json(drugById);
};

module.exports = {
  getDrugs: controllerWrapper(getDrugs),
  getDrugById: controllerWrapper(getDrugById),
};
