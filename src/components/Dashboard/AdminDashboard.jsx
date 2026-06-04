import React from 'react'
import 'remixicon/fonts/remixicon.css'

const AdminDashboard = () => {
    return (
        <div
            className='flex bg-black text-white items-center justify-center  min-h-screen px-4'>
            <div
                className=' border-blue-700 border-2 bg-[#111827] rounded w-full max-w-md shadow-lg '>

                <form
                    className='p-6' >
                    <div>
                        <h1
                            className='text-3xl'><i class="ri-arrow-left-circle-line"></i>
                            <span className='font-semibold text-3xl'>
                                Create Task
                            </span>
                        </h1>
                    </div>
                    <div
                        className='mt-10'>
                        <div>
                            <h3
                                className='text-2xl'>
                                Task Title
                            </h3>

                            <input
                                className='mt-2 w-full border-2 border-gray-500 rounded-xl bg-[#272f3d] outline-none p-2 capitalize'
                                type="text" placeholder='Make a UI design' />

                        </div>
                        <div
                            className='mt-5    '>
                            <h3
                                className='text-2xl'>
                                Description
                            </h3>
                            <textarea
                                placeholder='Details decription for task'
                                className='border-2 border-gray-500 rounded-xl bg-[#272f3d] outline-none w-full h-20 mt-2 p-2 capitalize '>


                            </textarea>
                        </div>

                        <div className='mt-5'>
                            <h3
                                className='text-2xl'>
                                Date
                            </h3>

                            <input
                                className='mt-2 w-full border-2 border-gray-500 rounded-xl bg-[#272f3d] outline-none p-2 capitalize'
                                type="date" placeholder='' />
                        </div>

                        <div className='mt-5'>
                            <h3
                                className='text-2xl'>
                                Assign To
                            </h3>

                            <input
                                className='mt-2 w-full border-2 border-gray-500 rounded-xl bg-[#272f3d] outline-none p-2 capitalize'
                                type="text" placeholder='' />
                        </div>

                        <div className='mt-5'>
                            <h3
                                className='text-2xl'>
                                Category
                            </h3>

                            <input
                                className='mt-2 w-full border-2 border-gray-500 rounded-xl bg-[#272f3d] outline-none p-2 capitalize'
                                type="text" placeholder='Design, Development ,etc..' />
                        </div>
                        <div className='mt-5'>
                            <button className='bg-black w-full rounded-xl p-3 text-2xl font-medium cursor-pointer hover:bg-[#2563EB] transition duration-300'>Create Task</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminDashboard