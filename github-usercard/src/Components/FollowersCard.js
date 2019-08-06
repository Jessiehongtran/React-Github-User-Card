import React from 'react';

const FollowersCard = (props) => {
    console.log('props in FollowersCard', props)

    return (
        <div>
        <img src = {props.data.avatar_url} alt="avatar"/>
        </div>
    )
}

export default FollowersCard;