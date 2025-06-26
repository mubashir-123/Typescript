type ListProps = {
    names: {
        first: string
        last: string
    } []
}


const NameList = (props: ListProps) => {
  return (
    <>
      <div>{props.names.map((name,index)=>{
         return (
            <h2 key={index}>{name.first} {name.last}</h2>
         ) 
      })}</div>
    </>
  )
}

export default NameList