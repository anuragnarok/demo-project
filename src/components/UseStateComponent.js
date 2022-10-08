
import React, { useState } from 'react'

const UseStateComponent = () => {

    //let number = 2
    //use state
    const [number,setNumber] = useState(2)

    const handleClick = (num)=>{
        console.log("button clicked with arg num value",num)

        let calculatedNumber=number+num;
        console.log("new number value",calculatedNumber)
        setNumber(calculatedNumber)
        
    }
  return (
    <div>
        UseStateComponent
        <div>
            <button 
            style={{color:"white", backgroundColor:"black"}}  
            onClick={()=>handleClick(3)}
            >Click me</button>
            <label>{number}</label>
        </div>

    </div>
    
  )
}

export default UseStateComponent