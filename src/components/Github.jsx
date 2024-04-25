import React, {useState, useEffect} from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/charanpreet01")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <div className='text-center bg-gray-700 text-white m-4 p-4 text-3xl'>
      Username: {data.login}
      <img className='w-[300px] my-8' src={data.avatar_url} alt="Github picture" />
      <Link to={data.html_url} className='underline text-gray-300 hover:text-gray-400'> Click here to see my Repositories </Link>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/charanpreet01")
    return response.json()
}
