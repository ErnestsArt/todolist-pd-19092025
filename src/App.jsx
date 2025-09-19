import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [job, setJob] = useState("");

    function handleChange(e) {
    setJob(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setJob(job);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
            <label>To Do List:
              <br />
              <input
                type="text" 
                value={job}
                onChange={handleChange}
                placeholder='what needs to be done?'
              />
            </label>
            <br />  
            <input type="submit" />
          </form> 

          <p id='display'>{job}</p>

    </>
  )
}

export default App
