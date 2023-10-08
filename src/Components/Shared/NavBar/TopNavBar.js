import Link from 'next/link';
import React from 'react';
import { TfiWorld } from 'react-icons/tfi';
 
const TopNavBar = () => {
 return (
   <div>
      <ul className='flex justify-end gap-5 w-10/12 mx-auto pt-2'>
       <li className='flex gap-5 text-xs'> <Link href={"/media-center"}>Media Center </Link> <span>|</span></li>
       <li className='flex gap-5 text-xs'><Link href={"/investor-relations"}>Investors Relations</Link> <span>|</span></li>
       <li className='flex gap-5 text-xs'><Link href={"/contact"}>Contact Us</Link> <span>|</span></li>
       <li className='text-xs flex gap-3'> <TfiWorld className='pt-[2px]'></TfiWorld> Select Region / Language</li>
       
      </ul>
   </div>
 );
};

export default TopNavBar;