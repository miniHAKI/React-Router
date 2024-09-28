import React, {useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {

    const Data = useLoaderData()

    // const [Data, setData] = useState([])
    // useEffect(() => {
    //     const a =  fetch('https://api.github.com/users/hiteshchoudhary')
    // .then(respose => respose.json())
    // .then(data => {
    //     console.log(data)
    //     setData(data)
    // })
    // console.log(a)
    // }, [])
   
    
  return (
    <div className='text-center items-center justify-center gap-4 flex m-4 bg-gray-400 text-red-900 p-4 text-3xl'>
      <img className='rounded-full' src={Data.avatar_url} alt="" width={100} height={100} />
      GitHub Followers: {Data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const a = await fetch('https://api.github.com/users/miniHAKI')
    return a.json()

}