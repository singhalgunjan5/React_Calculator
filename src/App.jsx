import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableData from './TableData';

function App() {
  const[inputvalue,setInputvalue]=useState("");
  function handleClick({value}){
    
    setInputvalue(inputvalue+value);
  }
  function handleClear()
  {
    setInputvalue("");
  }
    return (<>
    
    <table id="calcu"> 
        <tr> 
            <td colspan="3"> 
                <input type="text" id="result" placeholder={inputvalue}/> 
            </td> 
            <td><input type="button" value="c" onClick={handleClear}/></td> 
        </tr> 
  
        <tr> 
        <TableData setInputvalue={setInputvalue} inputvalue={inputvalue} value={1}></TableData>
        <TableData setInputvalue={setInputvalue} inputvalue={inputvalue} value={2}></TableData>
        <TableData setInputvalue={setInputvalue} inputvalue={inputvalue} value={3}></TableData>
        <TableData setInputvalue={setInputvalue} inputvalue={inputvalue} value={"/"}></TableData>
        </tr> 
        <tr> 
        {[4, 5, 6,"*"].map((i) => (
        <TableData
          setInputvalue={setInputvalue}
          inputvalue={inputvalue}
          value={i}
        />
      ))}
        </tr> 
        <tr> 
            {[7, 8, 9,"-"].map((i) => (
        <TableData
          setInputvalue={setInputvalue}
          inputvalue={inputvalue}
          value={i}
        />
      ))}
        </tr> 
        <tr> 
        {[0, ".", "=","+"].map((i) => (
        <TableData
          setInputvalue={setInputvalue}
          inputvalue={inputvalue}
          value={i}
        />
        
      ))}
      
      
        </tr> 
    </table> 
   
    </>);
}

export default App
