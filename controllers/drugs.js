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
    Drugs: result,
  });
};

module.exports = {
  getDrugs: controllerWrapper(getDrugs),
};
