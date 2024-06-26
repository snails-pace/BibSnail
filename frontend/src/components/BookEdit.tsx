import React, { useEffect } from 'react';
import { BookResource } from '../Resources';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../constants';
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import {DevTool} from '@hookform/devtools';


export default function BookEdit() {
    
    const { register, handleSubmit, reset, formState: {errors}, control } = useForm();

    const params = useParams();
    const bookId = params.pk;

    const [book, setBook] = React.useState<BookResource>();
    const navigate = useNavigate();

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
        axios.post(`${API_URL}/book/${bookId}/`, data).then((response) => {
            navigate(`/book/${bookId}`);
        }).catch(error => {
            console.error("An error occured", error);
        })
    }


    return (
        <div className="bookform-container books">
        <form className="bookform" id='bookeditform' onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor='title' >Title: </label>
                <input 
                    {...register("title", {required: "A title is required."})}
                    id='title'
                    type="text" 
                />
                {errors.title && (
                    <p>{`${errors.title.message}`}</p>
                )}
                <label htmlFor='author'>Author: </label>
                <input 
                    {...register("author")}
                    type="text" 
                    id='author'
                />            
                <label htmlFor='publisher'>Publisher: </label>
                <input 
                    {...register("publisher")}
                    type="text" 
                    id='publisher'
                />
                <label htmlFor='address'>Address: </label>
                <input 
                    {...register("address")}
                    type="text"
                    id='address'
                /> 
                <label htmlFor='edition'>Edition: </label>
                <input 
                    {...register("edition", {
                        valueAsNumber: true
                    })}
                    type="number"
                    id='edition'
                />
                <label htmlFor='year'>Year: </label>
                <input 
                    {...register("year")}
                    type="number"
                    id='year'
                />
                <label htmlFor='genre'>Genre: </label>
                <input 
                    {...register("genre")}
                    type="text" 
                    id='genre'
                />
                <label htmlFor='location'>Location: </label>
                <input 
                    {...register("location")}
                    type="text"
                    id='location'
                />
                <label>Borrowed from: </label>
                <input 
                    {...register("borrowed_from")}
                    type="text"
                    id='borrowed_from'
                />
                <label htmlFor='comments'>Comments: </label>
                <textarea 
                    {...register("comments")}
                    id='comments'
                    form='bookeditform'
                />
                <button className='submit-btn' type='submit'>Submit</button>
                <Link to={`/book/${bookId}`}><button type='button' className='cancel-btn'>Cancel</button></Link>
        </form>
        <DevTool control={control} />
        </div>
    )

}
