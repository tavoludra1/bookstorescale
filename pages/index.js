import { useState } from "react"
//import { Switch } from '@headlessui/react'

function className(...classes){
  return classes.filter(Boolean).join(' ')
}


export default function Home() {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-4 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Book Store</h2>
          <div className="mt-12">

      <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div className="mb-6">
          <label htmlFor="book-title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Book title</label>
          <input type="text" id="book-title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Title" required=""/>
        </div>
        <div className="mb-6">
          <label htmlFor="book-author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Book Author</label>
          <input type="text" id="book-author" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Author" required=""/>
        </div>
        <div className="mb-6">
          <label htmlFor="book-genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Book Genre</label>
          <input type="password" id="book-genre" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Genre" required=""/>
        </div>
         <div></div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new book</button>
      </form>
      </div>
  </div>
  </div>
  </div>

  )
}