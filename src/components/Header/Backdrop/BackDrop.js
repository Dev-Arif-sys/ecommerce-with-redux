import React from 'react';
import './BackDrop.css'

const BackDrop = ({showBack,click}) => {
    return (
        showBack && <div onClick={click} className='back-drop'>
            
        </div>
    );
};

export default BackDrop;