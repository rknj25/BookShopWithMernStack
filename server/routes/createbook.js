import express from 'express';
import book from '../model/book.js';
import  { addBook, viewBook } from '../controller/authController.js';

const router=express.Router();


router.post('/addbook',addBook)
router.get('/viewbook',viewBook)
export default router;