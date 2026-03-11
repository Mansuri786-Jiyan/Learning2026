const State = require("../model/StateModel");

// CREATE STATE
const createState = async (req, res) => {
  try {
    const state = await State.create(req.body);
    res.status(201).json(state);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL STATES
const getAllStates = async (req, res) => {
  try {
    const states = await State.find();
    res.json(states);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET STATE BY ID
const getStateById = async (req, res) => {
  try {
    const state = await State.findById(req.params.id);
    res.json(state);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE STATE
const deleteState = async (req, res) => {
  try {
    await State.findByIdAndDelete(req.params.id);
    res.json({ message: "State deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createState,
  getAllStates,
  getStateById,
  deleteState
};