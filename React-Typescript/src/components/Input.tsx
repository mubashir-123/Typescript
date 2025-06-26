import React from 'react'

type inputProps = {
    value: string
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: inputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
  return (
    <>
      <input type="text" value={props.value} onChange={handleInputChange} />
    </>
  )
}

export default Input