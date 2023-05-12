import React from 'react';
import { useState } from 'react';

function Dialog() {
    const [visible, setVisibility] = useState(false);
    const handleVisible = () => {
        setVisibility(!visible)
    }

    return (
        <>
            {visible && <div className='dialog'>
                <button className='remove-dlg' onClick={handleVisible} >&#x2715;</button>
                <p>Click close button</p>
            </div>}
            <button className='dialog-btn' onClick={handleVisible}>{visible ? 'Hide dialog' : 'Open Dialog'}</button>
        </>
    )
}

export default Dialog