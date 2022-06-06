import { useState } from "react"
import { useEffect } from 'react'
import { Switch } from '@headlessui/react'

function className(...classes){
  return classes.filter(Boolean).join(' ')
}


export default function Home() {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [APIResponse, setAPIResponse] = useState(null);

  useEffect(()=>{
    console.log("bookTitle", bookTitle);
    console.log("bookAuthor", bookAuthor);
    console.log("bookGenre", bookGenre);
    console.log("API Response", APIResponse);

  },[bookTitle, bookAuthor, bookGenre, APIResponse])

  const readDB = async() => {
    try {
      const response = await fetch("/api/books", {
        method: "GET",
        headers: {"Content-Type": "application/json"},
      });
      setAPIResponse(await response.json());
      if (response.status !== 200){
        console.log("something went wrong");
      } else {
        console.log("form submitted successfully !!!")
      }
    } catch (error) {
      console.log('there was an error reading from the db', error);
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const body = {bookTitle, bookAuthor, bookGenre}
    try {
      const response = await fetch("/api/books", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
    });
    if (response.status !== 200){
      console.log("something went wrong");
      //set an error banner here
    } else {
      resetForm();
      readDB();
      console.log("form submitted successfully !!!")
      //set a success banner here
    }
    //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log("there was an error submitting", error);
    }
  }

  const resetForm = () => {
    setBookTitle("");
    setBookAuthor("");
    setBookGenre("");
}

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-4 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Book Store</h2>
          <div className="mt-12">

      <form action="#" method="POST" onSubmit={(e) => handleSubmit(e)} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div className="mb-6">
          <label htmlFor="book-title"
           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Book title</label>
          <input onChange={(e) => {setBookTitle(e.target.value)}}
          value={bookTitle}
          type="text"
          id="book-title"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Title" required=""/>
        </div>
        <div className="mb-6">
          <label htmlFor="book-author"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Book Author</label>
          <input onChange={(e) => {setBookAuthor(e.target.value)}}
          value={bookAuthor}
          type="text" 
          id="book-author"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Author" required=""/>
        </div>
        <div className="mb-6">
          <label htmlFor="book-genre" 
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Book Genre</label>
          <input onChange={(e) => {setBookGenre(e.target.value)}}
          value={bookGenre}
          type="text" 
          id="book-genre" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Genre" required=""/>
        </div>
         <div></div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new book</button>
      </form>
      </div>
  </div>
  </div>
  <div>{APIResponse?.map((book)=>(<li></li>))}</div>
  </div>

  )
}