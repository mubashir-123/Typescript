type GreetProps = {
    name: string
    messageCount?: number
    isloggedIn: boolean
}
const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props //Assign default value
  return (
    <>
      {props.isloggedIn ? <p>Welcome {props.name} you have {messageCount} unread messages</p> : <p>Welcome Guests</p>}
    </>
  )
}

export default Greet