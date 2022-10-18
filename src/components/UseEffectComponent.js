import React from 'react'
import { useState, useEffect } from 'react'

function UseEffectComponent() {
    const [count,setCount,] = useState(0)
    useEffect(()=> {
        // we use `` and  $ to change something from the dom title.
        document.title = `you clicked ${count} times`;
       
    });
  return (
    <div>
        <button
        onClick={()=> setCount(count+1)}>count</button> <label>{count}</label> 
        
    </div>
  )
}

export default UseEffectComponent