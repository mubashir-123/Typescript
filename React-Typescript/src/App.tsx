import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import NameList from './components/NameList'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Event  from './components/Event'
import Input from './components/Input'
import Styles from './components/Styles'
import LogInOut from './components/state/LogInOut'
import User from './components/state/User'
import Counter from './components/state/Counter'

function App() {
  const personNames = {
     first: 'Bruce',
     last: 'wayne',
  } 

  const List = [
    {
      first: 'Keven',
      last: 'Peterson'
    },
    {
      first: 'Leona',
      last: 'James'
    },
    {
      first: 'Chalrie',
      last: 'Johnson'
    },
  ]

  return (
    <>
      <div>
        {/* passing values */}
         <Greet name='Hitexh Choudary' messageCount={20} isloggedIn = {true}/>
         {/* Passing objects */}
         <Person name = {personNames}/>
         <NameList names={List}/>
         {/* Children to component */}
         <Heading>Heading Placeholder</Heading>
         {/* React types */}
         <Oscar>
            <Heading>Oscar leading to leonard</Heading>
         </Oscar>
         {/* Optional type */}
         <Greet name="Mubashir" isloggedIn = {true} />
         {/* Events props */}
         <Event handleEvent= {(event, id) =>{
           console.log('button clicked',event,id)
           }}
          />
          {/* Event Input */}
          <Input value='' handleInput={(event) => console.log(event)} />
          {/* Style props */}
          <Styles styles={{border: "2px solid green", padding: "1rem", width: "50px", height: "50px"}} />
          {/* Use State */}
          <LogInOut /> <br /> <br />
          <User/>
          <Counter/>
      </div>
    </>
  )
}

export default App
