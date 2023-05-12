import React from 'react'
import { FaStar } from 'react-icons/fa';
function Star({ rated, click }) {
    return (

        <h1>
            <FaStar size='5rem'
                color={rated ? '#ffd700' : '#d6d6d6'}
                onClick={click} />
        </h1>
    )
}

export default Star