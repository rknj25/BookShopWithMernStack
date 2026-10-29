
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [bdata, setBdata] = useState({
        name: "",
        author: "",
        price: "",
        public_date: "",
        status: ""
    });

    const getData = async () => {
        try {
            const response = await axios.get(
                `http://localhost:9999/api/getbook/${id}`
            );

            const book = response.data.bdi;

            setBdata({
                name: book.name || "",
                author: book.author || "",
                price: book.price ?? "",
                public_date: book.public_date
                    ? new Date(book.public_date).toISOString().split('T')[0]
                    : "",
                status: book.status || ""
            });
        } catch (error) {
            alert(error.response?.data?.message || "Error fetching book");
        }
    };

    useEffect(() => {
        getData();
    }, [id]);

    const handleChange = (e) => {
        setBdata({
            ...bdata,
            [e.target.name]: e.target.value
        });
    };

    const updateData = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `http://localhost:9999/api/updateBook/${id}`,
                bdata
            );

            alert(response.data.message);
            navigate('/allbook');
        } catch (error) {
            alert(error.response?.data?.message || "Error updating book");
        }
    };

    return (
        <div className="book-page">
            <form className="book-form" onSubmit={updateData}>
                <fieldset>
                    <legend>Update Book</legend>

                    <div className="form-group">
                        <label>Book Name</label>
                        <input
                            type="text"
                            name="name"
                            value={bdata.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Book Author</label>
                        <input
                            type="text"
                            name="author"
                            value={bdata.author}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Book Price</label>
                        <input
                            type="number"
                            name="price"
                            value={bdata.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Publication Date</label>
                        <input
                            type="date"
                            name="public_date"
                            value={bdata.public_date}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select
                            name="status"
                            value={bdata.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="enable">Enable</option>
                            <option value="disable">Disable</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-success btn-full">
                        Update Book
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateBook;
