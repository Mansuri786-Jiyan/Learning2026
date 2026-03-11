import Books from "../model/BookModel.js";


// CREATE
export const createBook = async (req, res) => {
  try {
    const book = await Books.create(req.body);
    res.status(201).json({ message: "Book Created", data: book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
export const getAllBooks = async (req, res) => {
  const books = await Books.find();
  res.json(books);
};

// GET BY ID
export const getBookById = async (req, res) => {
  const book = await Books.findById(req.params.id);
  res.json(book);
};

// UPDATE BOOK
export const updateBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({
      message: "Book updated successfully",
      data: book
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
export const deleteBook = async (req, res) => {
  await Books.findByIdAndDelete(req.params.id);
  res.json({ message: "Book Deleted" });
};