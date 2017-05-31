import React from 'react';

function Welcome(props) {
    return <h4>Hello, {props.name}</h4>
}

function Welcomes() {
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    );
}

export default Welcomes