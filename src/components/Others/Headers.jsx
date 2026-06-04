import React from 'react'

const Headers = () => {
  return (
    <div className='flex items-end justify-between '>

        <h1 className='text-white font-medium text-3xl'>
            Hello,<br /><span className='font-bold text-5xl'>Nayak 👋</span> 
        </h1>

        <button className='text-white font-medium text-lg px-5 py-3 rounded-lg bg-red-700 hover:bg-red-800 cursor-pointer transition duration-300'>Log Out</button>
    </div>
  )
}

export default Headers