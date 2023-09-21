import React from 'react';
import { TfiWorld } from 'react-icons/tfi';
 
const TopNavBar = () => {
 return (
   <>
      <ul className='flex justify-end gap-5 w-10/12 mx-auto'>
       <li className='flex gap-5 text-xs'>Media Center <span>|</span></li>
       <li className='flex gap-5 text-xs'>Investors Relations <span>|</span></li>
       <li className='flex gap-5 text-xs'>Contact Us <span>|</span></li>
       <li className='text-xs flex gap-3'> <TfiWorld className='pt-[2px]'></TfiWorld> Select Region / Language</li>
       
      </ul>
   </>
 );
};

export default TopNavBar;