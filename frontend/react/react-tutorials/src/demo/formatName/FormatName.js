import React from 'react';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

function FormatName () {
    return (
        <h1>
            Hello, {formatName(user)}!
        </h1>
    )
}

export default FormatName;