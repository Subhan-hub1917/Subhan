import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';

import web1 from './Images/img_2023_07_11_01_35_41.jpg';
import { MyContext } from '../MyContext';

const Sidebar = () => {
  const {setBlur}=useContext(MyContext)
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setBlur(true)
  };

  const closeSidebar = () => {
    setIsOpen(false);
    setBlur(false)
  };

  return (
    <>
      <a href='#' className='text-decoration-none ms-2'>  <p  id="sidebar-toggle "  className='cursor-pointer border-0 mt-2  bg-dark text-warning rounded-3' onClick={toggleSidebar} >Contact Me</p>
      </a>
      <div className={`sidebar text-center ${isOpen ? 'open' : ''}`}>
        <div className=' text-end m-3 '>
          <button id="sidebar-cancel " className='mt-2 outline-none bg-dark text-warning border-0' onClick={closeSidebar}>
            <i className='bi bi-x h1'></i>
          </button>

        </div>
         <button className='rounded-circle border-0'>
          {/* <i className='h1 bi bi-person'>
          </i>  */}
          <img className='rounded-circle border-2 border-warning' src={web1} height={100} width={100}  alt='Subhan'/>
        </button>
          <h2 className='text-warning'>Subhan Qamar</h2>
        <div className="sidebar-content mt-3">
            <p>
            To get in touch with me, you can reach out through any platform that is convenient for you. Whether it's via email or social media, I am open to communication and excited to connect. Please feel free to  for a more formal conversation. Additionally, you can find me on LinkedIn  or message me on Twitter . I look forward to hearing from you and discussing any opportunities or inquiries you may have.
            </p>
        </div>
        <div className='d-flex flex-column text-start mt-5 ms-2'>
           <h4 className='text-center text-warning mb-4'>Contact Me </h4>
          
          <div className="d-flex">
              <i className='bi bi-google'></i>
              <a href="mailto:iamsubhan2002@gmail.com" target="_blank" className='text-decoration-none text-light'>
              <p className='ms-2 text-light'>Email</p>
              </a>
          </div>
          <div className="d-flex">
              <i className='bi bi-discord'></i>
              <a href="https://discord.gg/C6Bc8QRE" target="_blank" className='text-decoration-none text-light'>
                <p className='ms-2'>SubhanDiscord</p>
              </a>
          </div>
          <div className="d-flex">
              <i className='bi bi-facebook'></i>
              <a href="https://www.facebook.com/subhan.subhanqamar.3" className='text-decoration-none text-light' target="_blank">
              <p className="ms-2 ">SubhanFacebook</p>
              </a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
