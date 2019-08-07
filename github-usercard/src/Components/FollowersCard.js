import React from 'react';

const FollowersCard = (props) => {
    console.log('props in FollowersCard', props)

    return (
        <div className="card">
            <img src = {props.data.avatar_url} alt="avatar"/>
            <div className="info"> 
                <h3>User Name: {props.data.login}</h3>
                <p>Followers: {props.data.followers}</p>
                <p>Following: {props.data.following}</p>
            </div> 
        </div>
    )
}

export default FollowersCard;