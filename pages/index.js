import Head from 'next/head'
import { useState, useEffect } from 'react';
// import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css';
import HomeIssue from '../components/HomeIssue';
import axios from 'axios';
import Nav from '../components/Nav';

export default function Home() {

  const [homeIssues, setHomeIssues] = useState([]);

  useEffect(() => {
    axios.get('api/bugs/read').then(res => {
      setHomeIssues(res.data);
    })
  }, [])

  return (
    <div>
      <Head>
        <title>Bug Tracker</title>
        <link rel="icon" href="/spider-solid.svg" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
      </Head>
      <Nav />
      <main className='box-border m-0 p-0 flex justify-center items-center flex-col w-full h-screen'>
        <a href="/submit" className="text-xl bg-red-500 cursor-pointer p-3 rounded-lg text-white">Submit Bug</a>
        {homeIssues.map((item, i) => {
          return <HomeIssue info={item} key={i} />
        })}
      </main>
    </div>
  )
}
