import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
                subheading={"Check It Out"}
                heading={"Featured Item"}
            ></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20 , 2029</p>
                    <p className='uppercase'>Where can I get some ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius harum, ratione sint eum culpa. Eveniet asperiores sint sed voluptatibus voluptas debitis, dignissimos animi ratione, eligendi enim delectus? Reiciendis, voluptatibus!</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;