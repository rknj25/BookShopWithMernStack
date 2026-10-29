// import book from "../model/book.js";

// const addBook = async (req, res) => {

//     try {

//         const newBook = new book({
//             book_name: req.body.book_name,
//             book_author: req.body.book_author,
//             book_price: req.body.book_price,
//             book_public_date: new Date()
//         });

//         const saveBook = await newBook.save();

//         return res.status(201).json({
//             success: true,
//             message: "Book added successfully",
//             data: saveBook
//         });

//     }
//     catch (error) {

//         return res.status(500).json({
//             success: false,
//             message: "Error in adding book",
//             error: error.message
//         });

//     }
// }

// const viewBook = async (req, res) => {

//     try {

//         const books = await book.find();

//         return res.status(200).json(books);

//     }
//     catch (error) {

//         return res.status(500).json({
//             success: false,
//             message: "Error in viewing books",
//             error: error.message
//         });

//     }

// }

// const updateBook=async(req,res)=>{
//     try{
//         const books=await findById(req.params.id);
//         return res.json(books)
//     }
//      catch (error) {

//         return res.status(500).json({
//             success: false,
//             message: "Error in viewing books",
//             error: error.message
//         });

//     }

// }
// export { addBook, viewBook, updateBook };


import book from "../model/book.js";

export const addBook = async (req, res) => {
    try {
        const { name, author, price, public_date, status } = req.body;

        const aBook = await book.create({
            name,
            author,
            price,
            public_date,
            status
        });

        return res.status(201).json({
            message: "Book Added Successfully",
            aBook
        });
    }
    catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Error in Book Adding",
            error: error.message
        });
    }
};

export const viewBook=async(req,res)=>{
    try{
        const bd=await book.find();
        return res.json({message:"Data found",bd})
    }
    catch{
        return res.json({message:"Error in Data fetching"})
    }
}

export const dltBook=async(req,res)=>{
    try{
        const {id}=req.params;
        await book.findByIdAndDelete(id);
        return res.json({message:"Data Deleted"})
    }
    catch{
        return res.json({message:"Error in Deletion"})
    }
}

export const getId=async(req,res)=>{
    try{
        const {id}=req.params;
        const bdi=await book.findById(id);
        return res.json({message:"Data founnd",bdi})
    }
    catch{
        return res.json({message:"error in Fetching"})
    }
}

export const updBook=async(req,res)=>{
    try{
        const {id}=req.params;
        const { name, author, price, public_date, status } = req.body;
        const updb=await book.findByIdAndUpdate(id,{
            name:name,
            author:author,
            price:price,
            public_date:public_date,
            status:status
        })
        return res.json({message:"Data updated",updb})
    }
    catch{
        return res.json({message:"Error in update"})
    }
}