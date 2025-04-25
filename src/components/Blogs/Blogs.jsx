import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
export default function blogs({handleBookmarks}) {
    const [blogs,setBlogs]= useState([]);
    useEffect(()=>{
        fetch('blogs.json').then(res=>res.json()).then(data=>setBlogs(data));
    },[])
  return (
    <div className="md:w-2/3">
      {/* <h1>blogs: {blogs.length}</h1> */}
      {
        blogs.map(blog=><Blog blog={blog} handleBookmarks = {handleBookmarks}></Blog>)
      }
        
    </div>
  )
}
