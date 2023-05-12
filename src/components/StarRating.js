import React from 'react'
import Star from './Star'
import { useState } from 'react'

function StarRating() {
    const [rating, setRating] = useState(0);

    const handleClick = (starIndex) => {
        setRating(starIndex + 1);
    };
    return (<>

        <div className='star-container'>
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    rated={index < rating}
                    click={() => handleClick(index)}
                />
            ))}
        </div>
        <p className='ratings'>{rating > 0 ? `You've rated it ${rating} star${rating !== 1 ? 's' : ''}` : 'Please rate'}</p>
    </>
    )
}

export default StarRating