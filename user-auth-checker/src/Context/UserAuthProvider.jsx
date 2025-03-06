import React, {createContext, useState} from 'react'

export const UserAuthContext = createContext();

export const UserAuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn]  = useState(false);

  return (
    <div>
      <UserAuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
      </UserAuthContext.Provider>
    </div>
  )
}
