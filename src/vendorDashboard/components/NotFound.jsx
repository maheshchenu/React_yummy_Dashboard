import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    
    <div className='flex flex-col h-[80vh] items-center justify-center text-3xl'>
        <h1>404</h1>
        <h1>Page Not Found</h1>
        <Link to={'/'} className='text-sm mt-5 text-orange-400 underline'>Go To HomePage</Link>
    </div>
    </>
  )
}

export default NotFound