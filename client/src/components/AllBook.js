
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllBook = () => {
    const [bookdata, setBookdata] = useState([]);

    const getBook = async () => {
        try {
            const response = await axios.get(
                'http://localhost:9999/api/viewbook'
            );

            setBookdata(response.data.bd);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getBook();
    }, []);

    const dltBook = async (id) => {
        try {
            const response = await axios.delete(
                `http://localhost:9999/api/deleteBook/${id}`
            );

            alert(response.data.message);
            getBook();
        } catch (error) {
            alert(error.response?.data?.message || "Error deleting book");
        }
    };

    return (
        <div className="book-page">
            <div className="table-container">
                <div className="table-header">
                    <h1 className="page-title">All Books</h1>

                    <Link to="/" className="btn btn-primary">
                        + Add Book
                    </Link>
                </div>

                <table className="book-table">
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Book Author</th>
                            <th>Book Price</th>
                            <th>Publication Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookdata.length > 0 ? (
                            bookdata.map((book) => (
                                <tr key={book._id}>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>₹{book.price}</td>

                                    <td>
                                        {book.public_date
                                            ? new Date(book.public_date)
                                                .toISOString()
                                                .split('T')[0]
                                            : ''}
                                    </td>

                                    <td>
                                        <span className={`status ${
                                            book.status === 'enable'
                                                ? 'status-enable'
                                                : 'status-disable'
                                        }`}>
                                            {book.status}
                                        </span>
                                    </td>

                                    <td>
                                        <div className="action-buttons">
                                            <Link
                                                to={`/updatebook/${book._id}`}
                                                className="btn btn-primary"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                className="btn btn-danger"
                                                onClick={() => dltBook(book._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="empty-message">
                                    No books found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBook;
