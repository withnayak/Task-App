import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './storage/localStorage'
import { mainContext } from './context/MainContext'





const App = () => {

  useEffect(() => {
    setLocalStorage()
},)

  const [user, setUser] = useState(null)
  const mainData =useContext(mainContext)
 console.log(mainData?.employees)

  const handlerLogin = (email, password) => {
    if (email == 'admin@gmail.com' && password == '1234') {
      setUser('admin')


    }
    else if (mainData && mainData.employees.find((e)=>email === e.email && password === e.password )) {
      setUser('employee')

    }
    else {
      alert('invalid credentials')
    }
  }
 
  return (
    <>
      {!user ? <Login handlerLogin={handlerLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}

    </>
  )
}

export default App