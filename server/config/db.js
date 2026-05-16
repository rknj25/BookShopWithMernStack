import mongoose from "mongoose";

const dbConnect=async()=>{
    try{
        mongoose.connect("mongodb+srv://Rupesh_knj:Prisha1612@node.lhpeyea.mongodb.net/bookstore?retryWrites=true&w=majority&appName=NodeTutorial")
        console.log("database connected..");
    }
     catch{
        console.log("database not connected..");
        
    }
}
export default dbConnect;