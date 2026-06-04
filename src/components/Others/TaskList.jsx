import React from 'react'

const TaskList = () => {
  return (
    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      <div className='bg-red-400 w-full rounded-2xl p-5 text-white'>
        <div className='flex items-center justify-between  '>
          <h2 className='bg-red-600  text-xl font-medium  rounded p-1'>
            High
          </h2>
          <h3 className='text-xl font-medium'>04 April 2026</h3>
        </div>
        <div className='mt-5'>
          <h1 className='text-4xl font-bold'>
            First Task
          </h1>
          <h2 className='text-xl mt-3 font-medium'>
            complete the task in one week
          </h2>
        </div>
        
      </div>
      
      <div className='bg-green-400 w-full rounded-2xl p-5 text-white'>
        <div className='flex items-center justify-between  '>
          <h2 className='bg-red-600  text-xl font-medium  rounded p-1'>
            High
          </h2>
          <h3 className='text-xl font-medium'>04 April 2026</h3>
        </div>
        <div className='mt-5'>
          <h1 className='text-4xl font-bold'>
            First Task
          </h1>
          <h2 className='text-xl mt-3 font-medium'>
            complete the task in one week
          </h2>
        </div>
        
      </div>

      <div className='bg-pink-400 w-full rounded-2xl p-5 text-white'>
        <div className='flex items-center justify-between  '>
          <h2 className='bg-red-600  text-xl font-medium  rounded p-1'>
            High
          </h2>
          <h3 className='text-xl font-medium'>04 April 2026</h3>
        </div>
        <div className='mt-5'>
          <h1 className='text-4xl font-bold'>
            First Task
          </h1>
          <h2 className='text-xl mt-3 font-medium'>
            complete the task in one week
          </h2>
        </div>
        
      </div>
    </div>
  )
}

export default TaskList