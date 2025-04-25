import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingtime,setReadingtime] = useState(0);
  const handleReadingtime = (id,time)=>{
    setReadingtime(readingtime+time);

    // removing bookmark 
    const newBookmarks = bookmarks.filter(bookmark=> bookmark.id !== id);
    setBookmarks(newBookmarks);
  }
  
  const handleBookmarks = (blog)=>{
    setBookmarks([...bookmarks,blog]);
    
  }
  return (
    <>
    <Header></Header>
    <div className='w-11/12 mx-auto md:flex '>
    <Blogs handleBookmarks = {handleBookmarks} handleReadingtime = {handleReadingtime}></Blogs>
    <Bookmarks bookmarks = {bookmarks} readingtime = {readingtime}></Bookmarks>
    </div>
     
    </>
  )
}

export default App
