import React, { useEffect } from "react";
import { BookResource } from "../Resources";
import { useParams } from "react-router-dom";
import { API_URL } from "../constants";
import axios from "axios";

export default function BookDetail() {
    const [book, setBook] = React.useState<BookResource | null>();

    const params = useParams();
    const bookId = params.pk;

    useEffect(() => {
        axios.get(`${API_URL}/book/${bookId}`).then((response) => {
            setBook(response.data);
        }).catch(error => {
            console.error("An error occured", error);
        })
    }, [bookId]);
    
    if (!book) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <h1>{book.title}</h1>
                <p>{book.author}</p>
                <p>{book.year?.toString()}</p>
                <p>{book.edition}</p>
                <p>{book.location}</p>
                <p>{book.borrowed_from}</p>
            </div>
        )
    }

}