import React from 'react';
import Head from 'next/head';

export default function submit() {
    return (
        <div>
            <Head>
                <title>Bug Tracker</title>
                <link rel="icon" href="/bug-solid.svg" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
            </Head>

            <main className='box-border m-0 p-0 flex justify-center items-center w-100 h-screen'>
                <form className="w-50 h-5 border-2 border-transparent bg-gray-100 w-1/3 h-1/2 py-8 flex justify-center items-center flex-col rounded-xl" action="">
                    <label className="py-2" htmlFor="name">Name:</label>
                    <input className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-2/3 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" type="text" name="name" id=""/>
                    <label className="py-2" htmlFor="bug">Issue Description:</label>
                    <textarea className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-2/3 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" name="bug" id="" cols="30" rows="10"></textarea>
                    <p href="" className="w-1/4 text-center border-3 bg-red-400 cursor-pointer text-white my-8 p-2 rounded-xl transition hover:bg-red-500">Submit</p>
                </form>
            </main>
        </div>
    )
}
