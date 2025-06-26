import { useState } from 'react'

type UserState = {
    name: string
    email: string
}
const User = () => {
    const [user,setUser] = useState<UserState | null>(null);
    const handleLogIn = () => {
        setUser({
            name: 'Himesh',
            email: 'himesh@example.com',
        })
    }
    const handleLogOut = () =>{
        setUser(null);
    }
  return (
    <>
    <button onClick={handleLogIn}>LogIn</button>
    <button onClick={handleLogOut}>LogOut</button>
    <div>{user?.name}</div>
    <div>{user?.email}</div>
    </>
  )
}

export default User