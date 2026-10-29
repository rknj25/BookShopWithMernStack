import express from 'express';
import cors from 'cors';
import dbConnect from './config/db.js';
import Book from '../server/routes/createbook.js'

const port=9999;

const app=express();

app.use(express.json());
app.use(cors());

app.use('/api',Book)
dbConnect();
app.listen(port,()=>{
    console.log(`server created at:- ${port}`);
    
})
