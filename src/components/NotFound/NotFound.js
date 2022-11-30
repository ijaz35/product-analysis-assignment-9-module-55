import React from 'react';
import image from '../../image/404.jpg'

const NotFound = () => {
    return (
        <div className='notFound w-1/2 h-80 mx-auto  pt-20'>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;