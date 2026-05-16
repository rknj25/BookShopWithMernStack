import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    book_name:{type:String,required:true},
    book_author:{type:String,required:true},
    book_price:{type:Number,required:true},
    book_public_date:{type:Date,required:true},
    status:{type:String,
        enum:["enable","disable"],
        default:"enable",
    }
});

const book=mongoose.model("book",bookSchema);

export default book;