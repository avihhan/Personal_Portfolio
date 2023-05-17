import React, { useEffect, useState } from 'react';
// import 'tailwindcss/tailwind.css'; // Import the Tailwind CSS styles
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants/index';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex item-center fixed py-5 z-20 top-0 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">Avihhan &nbsp; <span className='sm:block hidden'>| PortFolio</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${active === Link.title
                  ? "text-white"
                  : "text-secondary"
                }   hover:text-white text-[18px]
              font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 my-2 mx-4 min-w-[140px] z-10 rounded-xl`}>
            
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${active === Link.title
                      ? "text-white"
                      : "text-secondary"
                    }   font-poppins font-medium 
                        cursor-pointer text-[16px]`}
                  onClick={
                    () => {
                      setActive(Link.title)
                      setToggle(!toggle)
                    }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar