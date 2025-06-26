type oscarProps = {
    children: React.ReactNode
}

const Oscar = (props: oscarProps) => {
  return (
    <>
      <h3>{props.children}</h3>
    </>
  )
}

export default Oscar