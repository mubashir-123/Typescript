import { useState } from 'react'

const LogInOut = () => {
    const [isloggedIn,setIsLoggedIn] = useState(false);
    const handleLoggedIn = () =>{
        setIsLoggedIn(true); 
    }
    const handleLoggedOut = () =>{
        setIsLoggedIn(false);
    }
  return (
    <>
      <button onClick={handleLoggedIn}>Log In</button>
      <button onClick={handleLoggedOut}>Log Out</button>
      {isloggedIn ? "Log in" : "Log out"}
    </>
  )
}

export default LogInOut