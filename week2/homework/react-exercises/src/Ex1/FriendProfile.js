import React from 'react'

const FriendProfile = (props) => {
    return (
        <div>
            <ul>
    <li>First Name: {props.friend.firstName}</li>
    <li>Last Name: {props.friend.lastName}</li>
    <li>Address: {props.friend.address}</li>
    <li>Country: {props.friend.country}</li>
    <li>Email: {props.friend.email}</li>
    <li>Phone number: {props.friend.phone}</li>
            </ul>
        </div>
    )
};

export default FriendProfile;