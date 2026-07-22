
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [welcome,setwelcome] = useState('isLoading...');

  useEffect(()=>{
  async function loadWelcome() {
    try {
      const response = await fetch('http://localhost:3000/wel')
      const data = await response.text()
      setwelcome(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  loadWelcome()
  },[]);

   async function addData() {
    try {
      const response = await fetch( 'http://localhost:3000/wel', { method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: 'Hello from frontend',
        }),})
      const data = await response.text()
      setwelcome(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
 
  return (
    <div>
      <div>
        <button onClick={()=> addData()}>click me</button>
      </div>
      {welcome}
    </div>
      
  )
}

export default App;
