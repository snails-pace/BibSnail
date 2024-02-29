import React from "react";
import { useEffect, useState } from "react";
import { getBookList } from "../api";

export default function BookList() {
    const [bookList, setBookList] = useState<any[] | null>();

    async function load() {
        try {
            const i = await getBookList();
            setBookList(i);
        } catch (err: any) {
            setBookList(null);
        }
    }

    useEffect( () => {load();}, []);

    if(!bookList) {
        return <p>Loading...</p>
    } else {
        return (<ul>
            {bookList!.map( (book) => (
                <li>{book.title}</li>
            ))}
        </ul> )
    }
}