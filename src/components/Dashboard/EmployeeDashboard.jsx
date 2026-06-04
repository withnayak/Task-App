import React from 'react'
import Headers from '../Others/Headers'
import Activity from '../Others/Activity'
import TaskList from '../Others/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] text white min-h-screen p-5'>
        <Headers/>
        <Activity/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard