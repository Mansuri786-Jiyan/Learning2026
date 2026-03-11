import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  price: Number,
  category: String,
});

const Books = mongoose.model("Books", BooksSchema);

export default Books;