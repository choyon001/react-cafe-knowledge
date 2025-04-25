import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({bookmarks,readingtime}) {
  return (
    <div className="md:w-1/3">
        <div className="bg-slate-400 p-4 mb-4 rounded mt-4 ml-4">
        <h2>Spent Time on read: {readingtime}</h2>
        </div>
        <div className="bg-slate-400 p-4 ml-4 rounded">
          <h3 className="text-2xl ml-3">BookMarked Blogs:{bookmarks.length}</h3>
        {
          bookmarks.map((bookmark)=><Bookmark bookmark={bookmark}></Bookmark>)
        }
        </div>
        
    </div>
  )
}
