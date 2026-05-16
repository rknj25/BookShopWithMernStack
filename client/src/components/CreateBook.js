import React, { useState } from 'react'
import axios from 'axios';

const CreateBook = () => {
  const fieldset={
    width:"500px",
    padding:"10px",
    margin:"auto",
    borderRadius: "10px"
  }

  const [bookData,setBookData]=useState({
    'book_name':"",
    'book_author':"",
    'book_price':""
  })

  const handleChange=(e)=>{
    // const [name,value]=e.target;
    const { name, value } = e.target;
    setBookData({
        ...bookData,[name]:value
    });
  }

  const handleSubmit=async(e)=>{

    e.preventDefault();
    try{
        const response=await axios.post('http://localhost:9999/api/addbook',bookData);
        console.log(response.data);
        setBookData({
             'book_name':"",
             'book_author':"",
             'book_price':""
        })
        
    }
    catch{
        console.log("data insert error..");
        
    }

  }
    return (
    <div>
        <fieldset style={fieldset}>
            <legend>Add Book</legend>
            <table>
                <tr>
                    <td>Book Name</td>
                    <td>
                        <input type='text' name='book_name' value={bookData.book_name} onChange={handleChange}/>
                    </td>
                </tr>
                                <tr>
                    <td>Book Author</td>
                    <td>
                        <input type='text' name='book_author' value={bookData.book_author} onChange={handleChange}/>
                    </td>
                </tr>
                                <tr>
                    <td>Book Price</td>
                    <td>
                        <input type='text' name='book_price' value={bookData.book_price} onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} align='center'>
                        <input type='button' value={"addBook"} name='AddBook' onClick={handleSubmit}/>
                    </td>
                </tr>
            </table>
        </fieldset>
    </div>
  )
}

export default CreateBook
