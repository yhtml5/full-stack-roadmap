import React from 'react';
import './Comment.css'


function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    console.log('Avatar: ', props)
    console.groupEnd()
    return (
        <img className="avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    console.log('UserInfo: ', props)
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    console.group('Comment')
    console.log('Comment: ', props)
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment