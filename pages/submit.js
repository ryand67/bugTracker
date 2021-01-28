import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function submit() {

    const [name, setName] = useState('');
    const [issue, setIssue] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleIssueChange = (e) => {
        console.log(e.target.value);
        setIssue(e.target.value);
    }
    
    const handleFormSubmit = () => {
        axios.post('/api/bugs/create', {
            user: name,
            bug: issue
        })
    }

    return (
        <div>
            <Head>
                <title>Bug Tracker</title>
                <link rel="icon" href="/spider-solid.svg" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
            </Head>

            <main className='box-border m-0 p-0 flex justify-center items-center w-100 h-screen'>
                <form onSubmit={handleFormSubmit} className="shadow border-2 border-transparent bg-gray-100 w-1/3 h-2/3 py-8 flex justify-center items-center flex-col rounded-xl" action="">
                    <label className="text-lg py-2" htmlFor="name">Name:</label>
                    <input onChange={handleNameChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-2/3 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" type="text" name="name"/>
                    <label className="text-lg py-2" htmlFor="bug">Issue Description:</label>
                    <textarea onChange={handleIssueChange} className="px-4 py-2 border h-1/2 focus:ring-gray-500 focus:border-gray-900 w-2/3 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" name="bug" id="" cols="30" rows="10"></textarea>
                    <p href="" className="w-1/4 text-center border-3 bg-red-400 cursor-pointer text-white my-8 p-2 rounded-xl transition hover:bg-red-500" onClick={handleFormSubmit}>Submit</p>
               </form>
            </main>
        </div>
    )
}
