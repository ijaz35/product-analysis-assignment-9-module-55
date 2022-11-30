import React from 'react';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <nav className='flex items-center justify-center pt-5 '>
            <CustomLink className='mr-5 font-sans font-semibold text-lg' to="/">Home</CustomLink>
            <CustomLink className='mr-5 font-sans font-semibold text-lg' to="/reviews">Reviews</CustomLink>
            <CustomLink className='mr-5 font-sans font-semibold text-lg' to="/dashboard">Dashboard</CustomLink>
            <CustomLink className='mr-5 font-sans font-semibold text-lg' to="/blogs">Blogs</CustomLink>
            <CustomLink className='mr-5 font-sans font-semibold text-lg' to="/about">About</CustomLink>

        </nav>
    );
};

export default Header;