import React from 'react'

type EventProps = {
    handleEvent: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
 const Event = (props: EventProps) => {
  return (
    <>
      <button onClick={(event) => props.handleEvent(event,1)}>Button</button>
    </>
  )
}

export default Event