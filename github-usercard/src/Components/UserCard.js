import React from 'react';

const UserCard = (props) => {
    console.log('props in UserCard', props)

    return (
        <div>
        <img src = {props.user.avatar_url} alt="avatar"/>
        </div>
    )
}

export default UserCard;