import React from 'react';

const UserCard = (props) => {
    console.log('props in UserCard', props.data)

    return (
        <div>
        <img src = {props.data.avatar_url} alt="avatar"/>
        </div>
    )
}

export default UserCard;