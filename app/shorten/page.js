"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
  const [url, setUrl] = useState('')
  const [shorturl, setshorturl] = useState('')
  const [generated, setGenerated] = useState("")
  const generate = async () => {
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl,
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    setUrl("")
    setshorturl("")
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) =>{ console.log(result)

       
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-4">
<div className="bg-green-200 p-8 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-300 hover:scale-105" style={{ border: '2px solid #39FF14', boxShadow: '0 0 10px #39FF14' }}>
  <h1 className="text-3xl font-bold text-green-800 mb-6 neon-text">Generate Your Short URL</h1>
  <input
    type="text"
    placeholder="Enter your URL"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    className="w-full p-2 mb-4 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-green-800 neon-border"
  />
  <input
    type="text"
    placeholder="Enter your preferred short URL"
    value={shorturl}
    onChange={(e) => setshorturl(e.target.value)}
    className="w-full p-2 mb-4 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-green-800 neon-border"
  />
  <button
    onClick={() => { generate() }}
    className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300 neon-text"
  >
    Generate
  </button>
  {
    generated && (
      <div className="mt-4 p-8 py-14 flex flex-col items-center gap-4 justify-center bg-green-100 rounded-lg shadow-md" style={{ border: '2px solid #006400', boxShadow: '0 0 10px #006400' }}>
        <p className="text-green-800 ">Your generated short URL is:</p>
        <Link
          href={generated}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-800 bg-green-200 hover:text-white font-bold hover:font-bold hover:bg-green-800 inline-block p-2 px-4 border border-green-800 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 text-center neon-text"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {generated}
        </Link>
      </div>
    )
  }
</div>


    </div>
  )
}

export default Shorten