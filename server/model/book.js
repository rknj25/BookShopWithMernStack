import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:{type:String,required:true},
    author:{type:String,required:true},
    price:{type:Number,required:true},
    public_date:{type:Date,required:true},
    status:{type:String,
        enum:["enable","disable"],
        default:"enable",
    }
});

const book=mongoose.model("book",bookSchema);

export default book;