import React from 'react';

const Services = (props) => {
    const {id, name, description, img} = props.service;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Services;