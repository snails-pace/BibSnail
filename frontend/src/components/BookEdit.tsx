import React, { useEffect } from 'react';
import { BookResource } from '../Resources';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../constants';
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

type Inputs = {
    title: string
    author: string
    publisher: string
    address: string
    edition: number
    year: Date
    genre: string
    owner: boolean
    location: string
    borrowed_from: string
    comments: string
}

export default function BookEdit() {
    
    const { register, handleSubmit, reset } = useForm();

    const params = useParams();
    const bookId = params.pk;

    const [book, setBook] = React.useState<BookResource>();


    useEffect(() => {
        axios.get(`${API_URL}/book/${bookId}`).then((response) => {
            setBook(response.data);
        }).catch(error => {
            console.error("An error occured", error);
        })
    }, [bookId]);
    
    useEffect(() => {
        reset(book);
    }, [book]);

    if (!book) {
        new Error("Book doesn't exist")
    } 


    const onSubmit = (data: FieldValues) => {
        axios.post(`${API_URL}/book/${bookId}`, data).then((response) => {
            console.log(response);
        }).catch(error => {
            console.error("An error occured", error);
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='BookForm'>
                <label htmlFor='title' >Title: </label>
                    <input 
                        {...register("title", {required: "A title is required."})}
                        id='title'
                        type="text" 
                        name='title'
                    />
                    {/* {errors.title && (
                        <p>{`${errors.title.message}`}</p>
                    )} */}
                
                <label>Author:
                    <input 
                        {...register("author")}
                        type="text" 
                    />
                </label>
                <label>Publisher:
                    <input 
                        {...register("publisher")}
                        type="text" 
                    />
                </label>
                <label>Address:
                    <input 
                        {...register("address")}
                        type="text"
                    />
                </label>
                <label>Edition:
                    <input 
                        {...register("edition", {
                            valueAsNumber: true
                        })}
                        type="number"
                    />
                </label>
                <label>Year:
                    <input 
                        {...register("year")}
                        type="date"
                    />
                </label>
                <label>Genre:
                    <input 
                        {...register("genre")}
                        type="text" 
                    />
                </label>
                <label>Owner:
                    <input 
                        {...register("owner", {
                            required: "Owner is required"
                        })}
                        type="text"
                    />
                </label>
                <label>Location:
                    <input 
                        {...register("location")}
                        type="text"
                    />
                </label>
                <label>Borrowed from:
                    <input 
                        {...register("borrowed_from")}
                        type="text"
                    />
                </label>
                <label>Comments:
                    <input 
                        {...register("comments")}
                        type="text"
                    />
                </label>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )

}
