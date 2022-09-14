import './App.css';
import {useState} from 'react';


function App() {
 const [Age, setAge] = useState(0)
 const [Lower, setLower] = useState(0)
 const [Upper, setUpper] = useState(0)
 

 
 function calculate() {
  const lowerLimit = (220-Age)*0.65
  setLower(lowerLimit)
  const upperLimit = (220-Age)*0.85
  setUpper(upperLimit)
  

 }
    return(
      <div id="container">
        <h3> Heart rate limits Calculator</h3>
        <form>
          <div>
            <label>Age:</label>
            <input type="number" value ={Age} onChange={e=> setAge(e.target.value)}/>
      </div>
            <div>
        
          <label>Heart rate limits:</label>
      <output>{Lower.toFixed(0)}-{Upper.toFixed(0)}</output>

      </div>
      <button id="calculate" type="button" onClick={calculate}>Calculate</button>

      </form>
      </div>
    );
    }
      
export default App;