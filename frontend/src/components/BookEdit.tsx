import React, { useEffect } from 'react';
import { BookResource } from '../Resources';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../constants';

export default function BookEdit() {
    const [book, setBook] = React.useState<BookResource | null>(null);
 //   const [data, setData] = React.useState({...book})
    const params = useParams();
    const bookId = params.pk;

    useEffect(() => {
        axios.get(`${API_URL}/book/${bookId}`).then((response) => {
            setBook(response.data);
 //           setData(response.data);
        }).catch(error => {
            console.error("An error occured", error);
        })
    }, [bookId]);


    function handleSubmit(e: React.FormEvent) {
        /**Prevents the default submit */
        e.preventDefault();
        /**Custom submit: sends data to database */
        const formData = book;
        axios.post(`${API_URL}/book/${bookId}/`, formData).then(res => {
            console.log(res.status, res.data);
        });
        }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.value || !book) return;
        const value: string = e.target.value as string;
        const newBook: BookResource = {...book};
        switch (e.target.name) {
            case "title": 
                newBook.title = value;
                break;
            case "author":
                newBook.author = value;
                break;
            case "publisher":
                newBook.publisher = value;
                break;
            case "address":
                newBook.address = value;
                break;
            case "edition":
                newBook.edition = Number(value);
                break;
            case "year":
                newBook.year = new Date(value);
                break;
            case "genre":
                newBook.genre = value;
                break;
            case "owner":
                newBook.owner = Boolean(value);
                break;
            case "location":
                newBook.location = value;
                break;
            case "borrowed_from":
                newBook.borrowed_from = value;
                break;
            case "comments":
                newBook.comments = value;
                break;
            default:
                new Error("BookResource doesn't have that field!")
        }
        setBook(newBook);
    }

    
    if (!book) {
        return <p>Loading...</p>
    } else {
        return (
            <form onSubmit={handleSubmit}>
                <div className='BookForm'>
                    <label>Title:
                        <input type="text" name='title' value={book.title} onChange={handleChange} />
                    </label>
                    <label>Author:
                        <input type="text" name='author' value={book.author} onChange={handleChange} />
                    </label>
                    <label>Publisher:
                        <input type="text" name='publisher' value={book.publisher} onChange={handleChange} />
                    </label>
                    <label>Address:
                        <input type="text" name='address' value={book.address} onChange={handleChange} />
                    </label>
                    <label>Edition:
                        <input type="number" name='edition' value={book.edition} onChange={handleChange} />
                    </label>
                    <label>Year:
                        <input type="date" name='year' value={book.year?.toString()} onChange={handleChange} />
                    </label>
                    <label>Genre:
                        <input type="text" name='genre' value={book.genre} onChange={handleChange} />
                    </label>
                    <label>Owner:
                        <input type="text" name='owner' value={book.owner.toString()} onChange={handleChange} />
                    </label>
                    <label>Location:
                        <input type="text" name='location' value={book.location} onChange={handleChange} />
                    </label>
                    <label>Borrowed from:
                        <input type="text" name='borrowed_from' value={book.borrowed_from} onChange={handleChange} />
                    </label>
                    <label>Comments:
                        <input type="text" name='comments' value={book.comments} onChange={handleChange} />
                    </label>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}