import profile from '../../assets/images/profile.png'
export default function header() {
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center py-4 border-b-2">
        <h1 className="font-bold text-sm md:text-4xl">Cafe-Knowledge</h1>
        <img src={profile} alt=""/>

    </div>
  )
}
