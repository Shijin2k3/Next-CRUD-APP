"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Posts(){
    const [posts,setPosts]=useState([]);

    const fetchRecords=async() =>{{
        const response=await axios.get("http://localhost:5000/posts")
        setPosts(response.data)
    }}

    useEffect(()=>{
        fetchRecords()
    },[])
    return(
        <div className="w-full py-20  flex flex-col items-center ">
            <div className="w-[80%] flex  justify-between mb-4">
               <h1 className=" font-bold text-2xl mb-4">Blog Posts</h1>
               <div >
                  <Link href="/posts/create" className="px-4 py-2 bg-green-500 rounded text-white text-center ">Add Posts</Link>
               </div>
            </div>
            <table className="w-[80%] divide-y divide-gray-200 mt-6">
                <thead className="bg-gray-50">
                    <tr className="">
                        <th scope="col" className="px-6 py-3 text-start font-medium text-gray-500 uppercase">ID</th>
                        <th scope="col" className="px-6 py-3 text-start font-medium text-gray-500 uppercase">Title</th>
                        <th scope="col" className="px-6 py-3 text-start font-medium text-gray-500 uppercase">Content</th>
                        <th scope="col" className="px-6 py-3 text-start font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                   {
                    posts.map((post)=>(
                      <tr key={post.id} >
                          <td className="px-6 py-3 text-gray-500">{post.id}</td>
                          <td className="px-6 py-3 text-gray-500">{post.title}</td>
                          <td className="px-6 py-3 text-gray-500">{post.content}</td>
                          <td className="px-6 py-3 flex justify-between">
                            <button className="bg-green-400 text-white rounded px-3 py-1">View</button>
                            <button className="bg-blue-600  text-white rounded px-3 py-1">Edit</button>
                            <button className="bg-red-400  text-white rounded px-3 py-1">Delete</button>
                          </td>
                      </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
    )
}