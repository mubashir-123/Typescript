
import { useState } from 'react'

type UserState = {
    name: string
    email: string
}
const LogUser = () => {
    // If the value may initially null for some time and then the value will be display.We use as keyword

    const [user,setUser] = useState<UserState>({} as UserState);
    const handleLogIn = () => {
        setUser({
            name: 'Himesh',
            email: 'himesh@example.com',
        })
    }
  return (
    <>
    <button onClick={handleLogIn}>LogIn</button>
    <div>{user.name}</div>
    <div>{user.email}</div>
    </>
  )
}

export default LogUser