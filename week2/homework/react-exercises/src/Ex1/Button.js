import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} >Get A Freind!</button>
        </div>
    )
};

export default Button;