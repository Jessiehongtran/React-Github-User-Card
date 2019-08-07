import React from 'react';

const FollowersCard = (props) => {
    console.log('props in FollowersCard', props)

    return (
        <div>
        <img src = {props.data.avatar_url} alt="avatar"/>
        <h3>User Name: {props.data.login}</h3>
        <p>Followers: {props.data.followers}</p>
        <p>Following: {props.data.following}</p>
        </div>
    )
}

export default FollowersCard;