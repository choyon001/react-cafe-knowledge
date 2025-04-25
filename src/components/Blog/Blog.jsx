import { BsBookmarkStarFill } from "react-icons/bs";
export default function Blog({blog,handleBookmarks}) {
    const {title,cover_img,author_name,published_date,reading_time,hashtags,author_img} = blog;
  return (
    <div className='mb-4'>
        <img src={cover_img} alt="not found" srcset="" />
        <div className="flex justify-between items-center py-2">
            <div className='flex justify-between items-center gap-2'>
                <div  >
                <img src={author_img} alt="" srcset="" className="w-14" />
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <h5 className='text-sm font-bold'>{author_name}</h5>
                    <p className='text-xs'>{published_date}</p>
                </div>
            </div>
            <div className='flex justify-between items-center gap-2'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleBookmarks(blog)}><BsBookmarkStarFill className="text-red-500"></BsBookmarkStarFill></button>
            </div>
        </div>
        <h2 className="text-sm md:text-4xl">{title}</h2>
        <div>
            <p className='flex gap-2 text-sm'>{hashtags.map((hashtag,index)=><span key={index} className=' text-xs'>{hashtag}</span>)}</p>
        </div>
    </div>
  )
}
