import React from "react";
import { useEffect, useState } from "react";
import { BookListResource } from "../Resources";
import { API_URL } from "../constants";
import axios from "axios";

export default function BookList() {
    const [bookList, setBookList] = useState<BookListResource | null>();

    // async function load() {
    //     try {
    //         const i = await getBookList();
    //         setBookList(i);
    //     } catch (err: any) {
    //         setBookList(null);
    //     }
    // }

    // useEffect( () => {load();}, []);

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
                    <p>{book.title}</p>
                    <p>by {book.author} Year: {book.year?.toString()}</p>
                </li>
            ))}
        </ul> )
    }
}