import React from 'react';
import './component.css';

const Flex = () =>  {
  return (
    <div>Flex
            <h1>Learning Flex Box</h1>
        <div className='container'>
            <button className='child item1' >Click here 1</button>
            <button className='child item2' >Click here 2</button>
            <button className='child item3' >Click here 3</button>
            <button className='child item4' >Click here 4</button>
            <button className='child item5' >Click here 5</button>

        </div> <hr/>
            <h1> Navigation bar</h1>
        <ul class="navigation">
                 <li><a href="#" target={"_blank"}>Home</a></li>
                <li><a href="#">About</a></li>
                 <li><a href="#">Products</a></li>
                 <li><a href="#">Contact</a></li>
        </ul> <br/> <br/>

        
    </div>
  )
}

export default Flex