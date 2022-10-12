import React from 'react'

export const PropsPassingWithProps = (props) => {
  console.log(props.numberProps)

  return (
    <div>
      <div>
        PropsPassingWithProps
      </div>
      <div>
        <h4>number is {props.numberProps}</h4>
        <h4>addAmount number is {props.addAmount}</h4>
        <h6>Result = {props.numberProps+props.addAmount}</h6>
      </div>
    </div>
  )
}

/////////////////////////////////////////////////////////////////////////////////////////

export const PropsPassingWithDestructuring = ({ numberProps, multiplyAmount }) => {
  return (
    <div>
      <div>
        PropsPassingWithDestructuring
      </div>
      <div>
        <h4>number is {numberProps}</h4>
        <h4>addAmount number is {multiplyAmount}</h4>
        <h6>Result is {numberProps*multiplyAmount}</h6>
      </div>

    </div>
  )
}


