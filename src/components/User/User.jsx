import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams();
  return (
    <div className='text-center font-semibold text-orange-500 '>
      hemlos : {id} 
    </div>
  )
}

export default User
