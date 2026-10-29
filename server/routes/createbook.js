import express from 'express';
import book from '../model/book.js';
import  { addBook,dltBook,getId,updBook,viewBook} from '../controller/authController.js';

const router=express.Router();


router.post('/addbook',addBook)
router.get('/viewbook',viewBook)
router.delete('/deleteBook/:id',dltBook);
router.get('/getbook/:id',getId)
router.put('/updateBook/:id',updBook)
export default router;