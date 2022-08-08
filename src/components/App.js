
import React, { useState, useRef } from 'react';
/**
 * @task : take input first name and last name and show it to forntend on submitted
 */

function App() {
  const fnameRef= useRef(""); 
  const lnameRef = useRef("");
  const [data, setdata] = useState({}); 
  const handleSubmit = event => {
   event.preventDefault();
   const data = {"fname" : fnameRef.current.value, "lname": lnameRef.current.value}; 
   console.log(data)
   setdata((pre)=> data);
 }

  return(
    <div className="App">
      <h1>What was then name ? </h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name"  ref={fnameRef}/>
            <br></br>
            <p>Last Name</p>
            <input id='lname' name="name"  ref={lnameRef}/>
          </label>
        </fieldset>
        <button id='submit' type="submit">Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        )
      }
    </div>
  )
}

export default App;