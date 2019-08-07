import React from 'react';

const UserCard = (props) => {
    console.log('props in UserCard', props)

    return (
        <div>
        <img src = {props.user.avatar_url} alt="avatar"/>
        <h3>User Name: {props.user.login}</h3>
        <p>Followers: {props.user.followers}</p>
        <p>Following: {props.user.following}</p>
        </div>
    )
}

export default UserCard;