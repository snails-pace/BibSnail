import React, { useEffect } from "react";
import { BookResource } from "../Resources";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../constants";
import axios from "axios";
import cover from '../static/img/cover.jpg';

/**
 * BookDetail is a JSX component which gets the book id as parameter in the url and gets the book from the backend_api.
 * @returns a jsx element with a detailed overview over the book attributes.
 */
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
            <div className="books">
                <div className="book" id="bookdetail">
                    <img id="bookdetail-cover" alt={`Cover of ${book.title}`} src={cover} />
                    <div aria-label="Book details.">
                    <div id="bookdetail-header">
                        <h1>{book.title}</h1>
                        <Link to={`/book/${book.id}/edit/`}>
                                <button>Edit Book</button>
                        </Link>
                    </div>
                    <p>{book.author}</p>
                    <p>{book.year?.toString()}</p>
                    <p>{book.edition}</p>
                    <p>{book.location}</p>
                    <p>{book.borrowed_from}</p>
                    </div>
                    
                    
                </div>
            </div>
        )
    }

}