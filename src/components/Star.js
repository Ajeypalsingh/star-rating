import React from 'react'
import { FaStar } from 'react-icons/fa';
function Star({ selected, onSelect }) {
    return (

        <h1>
            <FaStar size='5rem'
                color={selected ? 'gold' : 'gray'}
                onClick={onSelect} />
        </h1>
    )
}

export default Star