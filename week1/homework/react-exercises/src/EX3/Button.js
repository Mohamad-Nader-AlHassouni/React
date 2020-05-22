import React from 'react'

const Button = (props) =>(
<button onClick={props.clicked} >{props.name}</button>
)

export default Button;