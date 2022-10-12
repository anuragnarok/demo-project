import React, { useState } from 'react'

function CarComponent() {
    const [car, setCar] = useState(
        {
            brand: 'Ford',
            model: 'Mustang',
            year: '1964',
            color: 'red'
        }
    )
    const updateColor = (col) => {
        setCar(previousState => {
            return {...previousState, color: col}
        })
    }
  return (
    <div> <h1>CarComponent</h1>
        <div>

        </div>
            <p>
                I have a {car.color} {car.model} of year {car.year}
            </p>
            <button
            onClick={()=> updateColor("blue")}>blue</button>
             <button
            onClick={()=> updateColor("red")}>red</button>
    </div>
  )
}

export default CarComponent