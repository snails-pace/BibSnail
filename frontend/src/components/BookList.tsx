import React from "react";
import { useEffect, useState } from "react";
import { BookListResource } from "../Resources";
import { API_URL } from "../constants";
import axios from "axios";

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
        return (<ul>
            {bookList!.map( (book) => (
                <li>
                    <p className="text-3xl" >{book.title}</p>
                    <p>by {book.author} Year: {book.year?.toString()}</p>
                    <button>Details</button>
                </li>
            ))}
        </ul> )
    }
}