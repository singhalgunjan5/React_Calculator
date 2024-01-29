import React from 'react'

export default function TableData({ inputvalue, setInputvalue,value,key}) {
    function handleClick(){
        if(value === "=")
        {
            
            setInputvalue(eval(inputvalue));
        }
        else{
        setInputvalue(inputvalue+value);
        }
      }
  return (
    <>
                   {/* <td><input type="button" value={value} onClick={() => handleClick({ value: {value} })} /></td> */}
                   <input type="button" value={value} onClick={handleClick} />

    </>
  )
}
