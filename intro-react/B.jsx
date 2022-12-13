import React from 'react';
import PropTypes from 'prop-types';

export const B = (props) => {
    return (
        <>
            <h1>B</h1>
            <p>{props.titulo}</p>
            <p>{props.autor}</p>
        </>
    )
}

B.propTypes = {
    titulo: PropTypes.string,
    autor: PropTypes.string,
    visible: PropTypes.bool
}