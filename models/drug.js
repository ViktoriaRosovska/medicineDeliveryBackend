const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const drugsSchema = new Schema(
  {
    name: {
      type: String,
      // required: [true],
    },
    price: {
      type: Number,
    },
    manufacturer: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);
drugsSchema.post("save", handleMongooseError);

const Drug = model("drugs", drugsSchema);

const addDrugsSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  manufacturer: Joi.string().required(),
  image: Joi.string().required(),
});

const schemas = {
  addDrugsSchema,
};

module.exports = { Drug, schemas };
