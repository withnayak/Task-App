import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../storage/localStorage'


 export const mainContext = createContext()

const MainContext = ({ children }) => {

    const [userData, setUserData] = useState(null)
    
    useEffect(() => {
      const {employees,admin} = getLocalStorage()
    setUserData({employees,admin})
    

    }, [])
    
   
    return (
        <div>
            <mainContext.Provider value={userData}>
                {children}
                </mainContext.Provider>
        </div>
    )
}

export default MainContext