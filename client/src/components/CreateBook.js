
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreateBook = () => {
    const [bookData, setBookData] = useState({
        name: "",
        author: "",
        price: "",
        public_date: "",
        status: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setBookData({
            ...bookData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://bookshopwithmernstack-2.onrender.com/api/addbook',
                bookData
            );

            alert(response.data.message);

            setBookData({
                name: "",
                author: "",
                price: "",
                public_date: "",
                status: ""
            });
        } catch (error) {
            alert(error.response?.data?.message || "Error while adding book");
            console.log(error);
        }
    };

    return (
        <div className="book-page">
            <form className="book-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Add Book</legend>

                    <div className="form-group">
                        <label>Book Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter book name"
                            value={bookData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Book Author</label>
                        <input
                            type="text"
                            name="author"
                            placeholder="Enter author name"
                            value={bookData.author}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Book Price</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter book price"
                            value={bookData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Publication Date</label>
                        <input
                            type="date"
                            name="public_date"
                            value={bookData.public_date}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select
                            name="status"
                            value={bookData.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="enable">Enable</option>
                            <option value="disable">Disable</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary btn-full">
                        Add Book
                    </button>
                    <Link to={'/allbook'} className="btn btn-primary btn-full">View All Book</Link>
                </fieldset>
                
            </form>
             
        </div>
    );
};

export default CreateBook;
