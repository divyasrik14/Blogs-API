const Demo = require("../models/demoSchema");

const getData = async (req, res) => {
  const getAllUsers = await Demo.find({}).sort({ _id: -1 });

  res.status(200).json({ users: getAllUsers });
};

const postData = async (req, res) => {
  const { name, description } = req.body;
  const createUser = await Demo.create({ name, description });

  res.status(201).json({ message: "post added successfully" });
};

const getSingleData = async (req, res) => {
  const id = req.params.id;

  const userFound = await Demo.findById(id);

  res.status(200).json({ user: userFound });
};

const updateSingleData = async (req, res) => {
  const id = req.params.id;

  const updatedUser = await Demo.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  // console.log(updatedUser);

  res.status(200).json({ message: "Post updated Successfully", updatedUser });
};

const deleteData = async (req, res) => {
  const id = req.params.id;

  const deleteUser = await Demo.findByIdAndRemove({ _id: id });

  res.status(200).json({ message: "Post Deleted Successfully" });
};

module.exports = {
  getData,
  postData,
  updateSingleData,
  deleteData,
  getSingleData,
};
