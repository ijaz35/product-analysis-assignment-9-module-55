import React from 'react';

const Review = (props) => {
    const { name, img, comment, rating } = props.review;
    return (
        <div className='flex border-2 border-red-900 p-4 rounded-lg'>
            <img className='w-60 rounded-full'
                src={img} alt="" />
            <div className='reviewInfo px-4'>
                <h2 className='text-xl text-orange-900 font-semibold'>Name: {name}</h2>
                <p className='text-orange-700 my-3'>Rating: {rating} stars</p>
                <p className='text-left'>{comment}</p>
            </div>
        </div>
    );
};

export default Review;