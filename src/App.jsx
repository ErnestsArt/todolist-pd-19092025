import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>To do list</h1>
    <br/>
    <input type="text" name="text" id="text" placeholder='What needs to be done?'/>
    <button type="button">Add</button>
    <br/>     
    <p className='card'>No tasks yet - add one above.</p>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
