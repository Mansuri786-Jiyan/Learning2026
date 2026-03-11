import City from "../models/CityModel.js";

// CREATE CITY
const createCity = async (req, res) => {
  try {
    const city = await City.create(req.body);
    res.status(201).json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL CITY
const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET CITY BY ID
const getCityById = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    res.json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE CITY
const deleteCity = async (req, res) => {
  try {
    await City.findByIdAndDelete(req.params.id);
    res.json({ message: "City deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createCity,
  getAllCities,
  getCityById,
  deleteCity
};

// UPDATE CITY
const updateCity = async (req, res) => {
  try {
    const city = await City.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    res.json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
