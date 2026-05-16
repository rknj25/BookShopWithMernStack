import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllBook = () => {
    const [bookdata,setBookdata]=useState([]);

    const table={
    width:"500px",
    padding:"10px",
    margin:"auto",
    borderRadius: "10px"
  }


    useEffect(()=>{
        axios.get('http://localhost:9999/api/viewbook')
        .then(response=>{
            setBookdata(response.data);
        })
        .catch(error=>{
            console.error(error);
            
        });
    },[])
  return (
    <div>
        
        <table border={1} style={table}>
            <h1>All Book</h1>
            <tr>
                <th>BookName</th>
                <th>BookAuthor</th>
                <th>BookPrice</th>
            </tr>
            {
                bookdata.map((book)=>(
                    <tr>
                        <td>{book.book_name}</td>
                        <td>{book.book_author}</td>
                        <td>{book.book_price}</td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default AllBook

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const AllBook = () => {

//     const [bookdata, setBookdata] = useState([]);

//     useEffect(() => {

//         axios.get('http://localhost:9999/api/viewbook')
//             .then((response) => {

//                 console.log(response.data);

//                 // if API returns array directly
//                 setBookdata(response.data);

//                 // if API returns object like {data:[...]}
//                 // setBookdata(response.data.data);

//             })
//             .catch((error) => {
//                 console.error(error);
//             });

//     }, []);

//     return (
//         <div>

//             <h1>All Book</h1>

//             <table border="1" cellPadding="10">

//                 <thead>
//                     <tr>
//                         <th>Book Name</th>
//                         <th>Book Author</th>
//                         <th>Book Price</th>
//                     </tr>
//                 </thead>

//                 <tbody>

//                     {
//                         Array.isArray(bookdata) &&
//                         bookdata.map((book, index) => (

//                             <tr key={index}>
//                                 <td>{book.book_name}</td>
//                                 <td>{book.book_author}</td>
//                                 <td>{book.book_price}</td>
//                             </tr>

//                         ))
//                     }

//                 </tbody>

//             </table>

//         </div>
//     );
// };

// export default AllBook;