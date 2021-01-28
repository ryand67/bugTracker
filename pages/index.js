import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css';
import axios from 'axios';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Bug Tracker</title>
        <link rel="icon" href="/bug-solid.svg" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
      </Head>

      <main className='box-border m-0 p-0 flex justify-center align-center w-100 h-screen'>
        <h1 className="m-0">asdf</h1>
      </main>
    </div>
  )
}
