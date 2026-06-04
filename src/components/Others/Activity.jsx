import React from 'react'

const Activity = () => {
  return (
    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='bg-blue-400 w-full  rounded-2xl p-6 '>
            <h1 className='font-bold text-4xl'>0</h1>
            <h2 className='font-semibold text-3xl'>New Task</h2>

        </div>
        <div className='bg-yellow-400 w-full  rounded-2xl p-6 '>
            <h1 className='font-bold text-4xl'>2</h1>
            <h2 className='font-semibold text-3xl'>Completed</h2>

        </div>
        <div className='bg-red-400 w-full  rounded-2xl p-6 '>
            <h1 className='font-bold text-4xl'>3</h1>
            <h2 className='font-semibold text-3xl'>Accepted</h2>

        </div>
        <div className='bg-green-400 w-full  rounded-2xl p-6 '>
            <h1 className='font-bold text-4xl'>1</h1>
            <h2 className='font-semibold text-3xl'>Failed</h2>

        </div>
     

       
    </div>
  )
}

export default Activity