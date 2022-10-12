import { useState } from "react"
import React  from 'react'

const PracticeHooksComponent = () => {
    const [color , setColor] = useState("red")
    
    
  return (
    <div>PracticeHooksComponent
        <div>
            <h1>My favourite color is {color}!</h1>
            <button 
            type="button"
            onClick={() => {
                setColor("purple");
            
            }}
                 style= {{
                    backgroundColor: color == "purple"? 'purple' : '',
                    color: color == "purple" ? 'white' : ''
                 }}>  Purple
                  </button>
            <button 
            type="button"
            
            onClick={() => setColor("black")}
            style= {{
                backgroundColor: color == 'black' ? 'black' : '',
                color: color == 'black' ? 'white' : ''
             }}
            
            > black </button>
            <button 
            type="button"
            
            onClick={() => setColor("olive")}
            style= {{
                backgroundColor: color == "olive" ? 'olive' : '',
                color: color == "olive" ? 'white' : ''
             }}
            > olive </button>
        </div>

    




    </div>
  )
}

export default PracticeHooksComponent