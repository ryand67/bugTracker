import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import axios from 'axios';

export default function submit() {

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [issue, setIssue] = useState('');
    const [submitIcon, setSubmitIcon] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const handleIssueChange = (e) => {
        setIssue(e.target.value);
    }
    
    const handleFormSubmit = (e) => {
        setSubmitIcon(true);
        axios.post('/api/bugs/create', {
            user: name,
            subject: subject,
            bug: issue
        }).then(() => {
            document.getElementById('submitForm').reset();
            window.location.replace('/');
        }).then(() => {
            setSubmitIcon(false);
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

            <Nav />

            <main className='box-border m-0 p-0 flex justify-center items-center w-100 h-screen'>
                <form onSubmit={handleFormSubmit} className="shadow border-2 border-transparent bg-gray-100 w-2/3 h-2/3 py-8 flex justify-center items-center flex-col rounded-xl l:w-2/3" id="submitForm">
                    <label className="text-lg py-2" htmlFor="name">Name:</label>
                    <input required onChange={handleNameChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-2/3 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" type="text" name="name" placeholder="Name"/>
                    <label className="text-lg py-2" htmlFor="subject">Subject:</label>
                    <input required onChange={handleSubjectChange} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-2/3 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" type="text" name="subject" placeholder="Subject"/>
                    <label className="text-lg py-2" htmlFor="bug">Issue Description:</label>
                    <textarea required onChange={handleIssueChange} className="px-4 py-2 border h-1/2 focus:ring-gray-500 focus:border-gray-900 w-2/3 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" name="bug" id="" cols="30" rows="10" placeholder="What's going wrong?"></textarea>
                    {submitIcon ? <i className="fas fa-circle-notch fa-spin my-8 p-2 text-red-400 text-3xl"></i> : <p className="w-1/4 text-center border-3 bg-red-400 cursor-pointer text-white my-8 p-2 rounded-xl transition hover:bg-red-500" onClick={handleFormSubmit}>Submit</p>}
                    
               </form>
            </main>
        </div>
    )
}
