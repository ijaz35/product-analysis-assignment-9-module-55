import React from 'react';

const Blogs = () => {
    return (
        <section className='w-1/2 mx-auto mt-10'>
            <div className='p-8 text-left border-2 border-red-900 rounded-lg m-8'>
                <h2 className='text-lg font-semibold text-red-700 mb-4'>Q1. What is context API</h2>
                <p>Context API is a new feature added in version 16.3 of React that allows us to share or pass data across the whole application without props drilling. </p>
            </div>
            <div className='p-8 text-left border-2 border-red-900 rounded-lg m-8'>
                <h2 className='text-lg font-semibold text-red-700 mb-4'>Q2. What is inline and inline block element?</h2>
                <p>Inline elements are refer to that kind of elements those only getting space to it's own width and height. But block elements get the whole width of its parent container weather inline block element behaves like block element but gets only its own width instead of getting whole width.</p>
            </div>
            <div className='p-8 text-left border-2 border-red-900 rounded-lg m-8'>
                <h2 className='text-lg font-semibold text-red-700 mb-4'>Q3. What is semantic tags in HTML?</h2>
                <p>Semantic Tags are used to define different parts of a webpage. some semantic tags are article, aside, header, footer, section main etc..  </p>
            </div>
        </section>
    );
};

export default Blogs;