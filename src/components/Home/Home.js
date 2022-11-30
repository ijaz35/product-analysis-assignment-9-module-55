import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import laptopImage from '../../image/laptop.jpg'
import Review from '../Review/Review';


const Home = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();
    return (
        <div>
            <section className='md:flex items-center px-20 mt-20'>
                <div className="mr-20">
                    <h2 className='text-5xl font-bold text-orange-900 mt-[-150px]'>ASUS LAPTOP The Best One</h2>
                    <h3 className='text-3xl py-7 font-bold text-orange-700'>Inspiring Innovation for you</h3>
                    <p className='font-sans'>The ASUS VivoBook S15 (Price Check) is available in a variety of configurations. The model we reviewed is the Black-coloured S510U with a dual-core Intel Core i5-7200U processor, 4 GB of RAM and a storage configuration of a 128 GB SSD and a 1 TB hard disk drive.</p>
                </div>
                <div>
                    <img className='w-[1400px] rounded-lg' src={laptopImage} alt="" />

                </div>
            </section>
            <section >
                <h2 className='text-5xl font-bold text-orange-900 my-20'>Customers Reviews</h2>
                <div className='grid md:grid-cols-2 gap-6 p-8'>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <button onClick={() => navigate('/reviews')} className='bg-orange-700 py-4 px-20 text-white rounded-lg mt-4'>See All Reviews</button>
            </section>
        </div>


    );
};

export default Home;