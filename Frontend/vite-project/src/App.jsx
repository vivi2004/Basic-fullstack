import { useEffect, useState } from 'react'
import './App.css'
import axios from  'axios'
function App() {

 const [ jokes,setJokes] = useState([])
 useEffect(() =>{
   axios.get('/api/jokes')
   .then((response) => {
    setJokes(response.data);
   })
 })
  return (
    <>  
         <h1>  HEY  I M HERE  WELCOME ME !! </h1>
        <p> JOKES: { jokes.length}</p>
        {
          jokes.map(( joke,  index) =>(
              <div key = {joke.id}>
                 <h3>{joke.title}</h3>
                 <p>{joke.content}</p>
              </div>
           ) )
        }
    
    </>
  )
}

export default App

