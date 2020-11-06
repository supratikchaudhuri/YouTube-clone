import React from 'react'
import { Avatar } from '@material-ui/core';
import "../styles/Subscribed.css";

function Subscribed({avatar, text}) {
    return (
        <div className="subscribed">
            <Avatar className="avatar" src={avatar}/>
            <p>{text}</p>
        </div>
    )
}

export default Subscribed
