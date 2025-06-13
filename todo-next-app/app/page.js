"use client";

import Todo from "@/Components/Todo";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const [formData,setFormData] = useState({
    title: "",
    description: ""
  })

  const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
    
  }

  const onSubmitHandle = async (e)=>{
    e.preventDefault();
    try {
      toast.success("Todo Added Successfully!");
    } catch (error) {
      
    }
  }

  return (
    <>
    <ToastContainer/>
      <form onSubmit={onSubmitHandle} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
          onChange={onChangeHandler}
          value={formData.title}
        />
        <textarea
          name="description"
          id=""
          placeholder="Enter description"
          className="px-3 py-2 border-2 w-full"
          onChange={onChangeHandler}
          value={formData.description}
        ></textarea>
        <button type="submit" className="bg-orange-500 py-3 px-11">
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
               Status
              </th>
              <th scope="col" className="px-6 py-3">
               Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo/>
            <Todo/>
            <Todo/>
            
          </tbody>
        </table>
      </div>
    </>
  );
}
