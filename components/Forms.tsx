"use client"
import { handleOnGenerateUrl } from '@/ServerActions'
import React, { useState } from 'react'

const Forms = () => {
  const [genUrl,setGenUrl]= useState("");

  const handleOnFormSubmit = async(formData:FormData)=>{
    const generateUrl = await handleOnGenerateUrl(formData);
    setGenUrl(`http://localhost:3000/${generateUrl}`);
  }
  return (
    <form action={handleOnFormSubmit}>
    <div className="mb-6">
      <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Original Url</label>
      <input type="text" id="url" name='url' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
    </div>
    <div className="mb-6">
      <label htmlFor="newurl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Generated Url</label>
      <input value={genUrl} disabled type="text" id="newurl" name='newurl' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
    </div>
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
  
  )
}

export default Forms
