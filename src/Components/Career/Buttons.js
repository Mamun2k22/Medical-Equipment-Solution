import React, { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

const Buttons = () => {
    const [showGlobal, setShowGlobal] = useState(false);
    const [showDefault, setShowDefault] = useState(false);
 
  
    const handleGlobal=()=>{
      setShowGlobal(!showGlobal)
      setShowDefault(false)
    }
    const handleDefault=()=>{
      setShowDefault(!showDefault)
      setShowGlobal(false)
    }
    return (
        <div>
             <div className="lg:flex gap-x-3 my-10 ">
          <div>
            <div className="flex justify-between bg-white text-gray-800 px-4 py-[10px] items-center lg:w-56 relative mb-2 lg:mb-0">
              <h1 className="text-[13px]">Job Function</h1>
              {showGlobal ? (
                <SlArrowUp
                  className="cursor-pointer"
                  onClick={handleGlobal}
                ></SlArrowUp>
              ) : (
                <SlArrowDown
                  className="cursor-pointer"
                  onClick={handleGlobal}
                ></SlArrowDown>
              )}
            </div>
            {showGlobal && (
              <div className="w-10/12 lg:w-56 h-52 overflow-scroll absolute shadow-2xl z-10 bg-white bg-opacity-100 p-4">
                <ul>
                  <li className="font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Job Function
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Account Management
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Administration
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Channel Management
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Clinical Application
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Clinical Training
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Customer Service
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Customer Support
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                     Customer Training
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Field Services
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Finance
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Human Resources
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    IT
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Internship
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Legal
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Logistics
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Management/Leadership
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Marketing
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                  Marketing Communication
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Operations
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Product Marketing / Management
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Public Relations
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                    Regulatory Affairs
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                     Sales
                  </li>
                  <li className="pt-5 font-medium text-[13px] hover:text-[#B70909] cursor-pointer">
                     Technical Services
                  </li>
                   
                </ul>
              </div>
            )}
          </div>
          <div>
            <div className="flex justify-between bg-white text-gray-800 px-4 py-[10px] items-center lg:w-56  relative mb-2 lg:mb-0">
              <h1 className="text-[13px]"> Country/Region</h1>
              {showDefault ? (
                <SlArrowUp
                  className=" cursor-pointer"
                  onClick={handleDefault}
                ></SlArrowUp>
              ) : (
                <SlArrowDown
                  className=" cursor-pointer"
                  onClick={handleDefault}
                ></SlArrowDown>
              )}
            </div>
            {showDefault && (
              <div className="h-52 overflow-scroll absolute shadow-2xl z-10 bg-white bg-opacity-100 w-10/12 lg:w-56 p-4">
                <ul>
                  <li className=" hover:text-[#B70909] text-[13px] cursor-pointer">Country/Region</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Africa</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Algeria </li>
       
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Argentina </li>
                 
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Asia </li>
        
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Australia </li>
              
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Azerbaijan</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Bangladesh</li>
    
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Brazil</li>
             
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Chile</li>
              
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Colombia</li>
        
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Czech Republic</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Eastern Europe</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Ecuador</li>
        
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Egypt </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Ethiopia</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Europe</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">France </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Germany</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Greece</li>
              
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">India</li>
           
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Indonesia</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Iraq</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Italy</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Japan</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Kazakhstan </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Kenya</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Latin America and The Caribbean</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Malaysia </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Mexico </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Middle East</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Morocco</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Myanmar</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Netherlands</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Nigeria </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> North America</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Oceania</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Pakistan</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Panama</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Peru </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Philippines</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Poland </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Romania</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Russia</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">South Arabia </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Senegal</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Slovakia</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> South Africa</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">South Korea </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Spain </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Sri Lanka</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Sweden</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Thailand </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Turkey</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> UAE</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Ukraine</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> United Kingdom</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Uzbekistan</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Venezuela</li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer">Vietnam </li>
                  <li className="pt-5 hover:text-[#B70909] text-[13px] cursor-pointer"> Western Europe</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <button className='bg-[#B70909] flex items-center px-6 py-[10px] text-[13px] text-white'>Search</button>
          </div>
        </div>
        </div>
    );
};

export default Buttons;