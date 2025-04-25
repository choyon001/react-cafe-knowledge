
export default function Bookmark({bookmark}) {
    const {title} = bookmark;
  return (
    <div className="text-2xl bg-white p-4 m-2 rounded">
        <h2 >{title}</h2>
    </div>
  )
}
