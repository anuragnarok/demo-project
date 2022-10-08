import React from 'react'



const BlackButtomComponent = () => {

    let number = 2

    const handleClick = (num)=>{
        console.log("button clicked with arg num value",num)
        number=number+num;
        console.log("new number value",number)
        
    }
  return (
    <div>
        BlackButtomComponent
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

export default BlackButtomComponent