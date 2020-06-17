import React from 'react';
import "./Input.css";

const Input =(props) =>{
    return(
        <input className='searchInput' onChange={event => {props.onChange(event.target.value)}} value={props.val} placeholder="Search City"></input>
    )
};

export default Input;