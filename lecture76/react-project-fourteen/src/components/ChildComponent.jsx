import React from 'react'

const ChildComponent = React.memo(
  (props) => {
    console.log("Child Component got re-rendered");

    return (
        <div>
        <button onClick={props.dummyFunction}>
            {props.buttonName}: {Number(props.value)}
        </button>
        </div>
    )
  }
)

export default ChildComponent