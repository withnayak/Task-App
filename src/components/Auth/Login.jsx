import React, { useState } from 'react'



const Login = ({ handlerLogin }) => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')


   const submitBtn = (e) => {
      e.preventDefault()
      console.log("form is submitted")
      console.log("your email is", email)
      console.log("and your password is", password)

      handlerLogin(email, password)
      setEmail('')
      setPassword('')
   }
   return (
      <div className='flex bg-black text-white items-center justify-center  min-h-screen px-4'>

         <div className=' border-blue-700 border-2 bg-[#111827] rounded-xl w-full max-w-md shadow-lg '>

            <form
               onSubmit={(e) => {
                  submitBtn(e)
               }}
               className=' flex flex-col items-center justify-center p-20 '>

               <h1
                  className='text-2xl sm:text-3xl font-bold mb-6'
               >
                  Login
               </h1>

               <input
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value)

                  }}
                  required
                  className=' w-full border-2 border-red-900 px-5 py-3 mt-2 rounded-full text-2xl outline-none'

                  type="email"
                  placeholder='Enter Your Email' />

               <input
                  value={password}
                  onChange={(e) => {
                     setPassword(e.target.value)

                  }}
                  required
                  className='mt-5 w-full border-2 border-red-900 px-5 py-3 rounded-full text-2xl outline-none'

                  type="password"
                  placeholder='Enter Password' />

               <button

                  className=' w-full bg-red-800  py-3 mt-10  cursor-pointer hover:bg-[#2563EB] border-2 border-red-900 border-none  rounded-full text-2xl outline-none transition duration-300'>

                  Log in

               </button>
            </form>
         </div>
      </div>
   )
}

export default Login 