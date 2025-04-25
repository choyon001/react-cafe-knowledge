import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
  const [bookmarks,setBookmarks] = useState([]);
  
  const handleBookmarks = (blog)=>{
    setBookmarks([...bookmarks,blog]);
    
  }
  return (
    <>
    <Header></Header>
    <div className='w-11/12 mx-auto md:flex '>
    <Blogs handleBookmarks = {handleBookmarks}></Blogs>
    <Bookmarks bookmarks = {bookmarks}></Bookmarks>
    </div>
     
    </>
  )
}

export default App
