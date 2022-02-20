const FlatData = require("../models/flatData.model");
//const flatData = require("../models/flatData.model");
//const flatData = require("../Models/flatData");

const postFlatData = async (req, res) => {
  const flat = new FlatData({
    flat_id: req.body.flat_id,
    apartment: req.body.apartment,
    block: req.body.block,
    type: req.body.type,
    flatNumber: req.body.flatNumber,
    residents: req.body.residents,
  });

  try {
    const savedFlatData = await flat.save();
    res.send(savedFlatData);
  } catch (err) {
    res.status(400).send(err);
  }
};
const getAllData = async (req, res, next) => {
  try {
    const items = await FlatData.find().lean().exec();

    return res.send(items);
  } catch (err) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
};

const getAllflats = async (req, res, next) => {
  //   const allFlats = await FlatData.find({}).lean().exec();

  //   res.status(200).json({ allFlats });

  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 2;
    const skip = (page - 1) * size;
    const totalPages = Math.ceil(
      (await FlatData.find().countDocuments()) / size
    );
    //console.log(totalPages);
    const alFlats = await FlatData.find().skip(skip).limit(size).lean().exec();
    return res.json({ alFlats, totalPages });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
};

const editFlate = async (req, res) => {
  FlatData.findById(req.params.id)
    .then((item) => {
      item.flatNumber = req.body.flatNumber;
      item.flat_id = req.body.flat_id;
      item.apartment = req.body.apartment;
      item.type = req.body.type;
      item.block = req.body.block;
      item.residents = req.body.residents;

      item
        .save()
        .then(() => res.json("Flat Data updated Successfully!"))
        .catch((err) => res.status(400).json(`Error : ${err}`));
    })
    .catch((err) => res.status(400).json(`ERROR : ${err}`));
};

const deleteFlate = async (req, res) => {
  FlatData.findByIdAndDelete(req.params.id)
    .then(() => res.json("flat Deleted Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {
  postFlatData,
  getAllData,
  getAllflats,
  deleteFlate,
  editFlate,
};
