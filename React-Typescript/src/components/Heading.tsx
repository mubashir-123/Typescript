
type headingProps = {
   children: string
}
const Heading = (props: headingProps) => {
  return (
    <>
      <h2>{props.children}</h2>
    </>
  )
}

export default Heading