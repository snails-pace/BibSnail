import React from "react";
import { useEffect, useState } from "react";
import { BookListResource } from "../Resources";
import { API_URL } from "../constants";
import axios from "axios";
import { Link } from "react-router-dom";
import cover from '../static/img/cover.jpg';

export default function BookList() {
    const [bookList, setBookList] = useState<BookListResource | null>();


    useEffect(() => {
        axios.get(`${API_URL}/books`).then((response) => {
            setBookList(response.data);
        });
    }, []);

    if(!bookList) {
        return <p>Loading...</p>
    } else {
        return (
            <>
            <h1>All Book</h1>
            <ul className="books">
                {bookList!.map( (book) => (
                    
                        <li key={book.id} className="book" id="booklist-book">
                            <Link to={`/book/${book.id}`} aria-label={`Book details on ${book.title}`}>
                            <img id="bookdetail-cover" alt={`Cover of ${book.title}`} src={cover} />
                                <h2>{book.title} ({book.year})</h2>
                                <p>by {book.author} </p>
                            </Link>
                        </li>   
                ))}
            </ul>
            </> 
        )
    }
}