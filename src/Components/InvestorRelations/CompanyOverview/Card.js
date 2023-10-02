/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import image from "../../../images/relations/ir-1.jpg"
import Image from 'next/image';

const Card = () => {
    return (
        <div className='lg:flex  w-11/12'>
            <Image src={image} alt='' className='h-full lg:w-8/12'></Image>
            <p className='text-[22px]  leading-8 text-gray-600 flex items-center pl-5 lg:pl-20'>In the international market, Mindray has become a long-term partner of the world's leading medical institutions and has won wide recognition from medical institutions in the United States, Britain, Germany, France, Italy, Spain and other countries.</p>
        </div>
    );
};

export default Card;