import book from "../model/book.js";

const addBook = async (req, res) => {

    try {

        const newBook = new book({
            book_name: req.body.book_name,
            book_author: req.body.book_author,
            book_price: req.body.book_price,
            book_public_date: new Date()
        });

        const saveBook = await newBook.save();

        return res.status(201).json({
            success: true,
            message: "Book added successfully",
            data: saveBook
        });

    }
    catch (error) {

        return res.status(500).json({
            success: false,
            message: "Error in adding book",
            error: error.message
        });

    }
}

const viewBook = async (req, res) => {

    try {

        const books = await book.find();

        return res.status(200).json(books);

    }
    catch (error) {

        return res.status(500).json({
            success: false,
            message: "Error in viewing books",
            error: error.message
        });

    }

}

export { addBook, viewBook };