import React from 'react'
type styleProps = {
    styles: React.CSSProperties
}
const Styles = (props: styleProps) => {
  return (
    <>
      <div style={props.styles}>Any thing</div>
    </>
  )
}

export default Styles