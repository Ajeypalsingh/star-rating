import React from 'react';
import { useState } from 'react';

function Dialog() {
    const [visible, setVisibility] = useState(false);
    const handleVisible = () => {
        setVisibility(!visible)
    }

    return (
        <>
            <div className={visible ? 'visible dialog' : 'hidden dialog'}>
                <button className='remove-dlg' onClick={handleVisible} >&#x2715;</button>
                <p>Click close button </p>
            </div>
            <button className={visible ? 'dialog-btn red-btn' : 'dialog-btn green-btn'} onClick={handleVisible}>{visible ? 'Hide dialog' : 'Open Dialog'}</button>
        </>
    )
}

export default Dialog