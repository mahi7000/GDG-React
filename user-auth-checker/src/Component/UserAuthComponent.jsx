import React, { useContext } from 'react'
import { UserAuthContext } from '../Context/UserAuthProvider'

export const UserAuthComponent = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserAuthContext);
  return (
    <div>
        <button onClick={() => setIsLoggedIn(isLoggedIn ? false : true)}>
            {isLoggedIn ? "Log Out" : "Log In"}
        </button>
        <p>
            {isLoggedIn ? "Welcome, User" : "Please Log In"}
        </p>
    </div>
  )
}
