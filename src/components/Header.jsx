import React from 'react'
import logo from "../assets/download.gif"
import { TbBrandGoogleHome } from "react-icons/tb";
import { IoTicketOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { MdTimeline } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";

const Header = () => {
  return (
    <header className='container-fluid px-md-5 d-flex justify-content-between align-items-center'>
        
        <a href="#"><img src={logo} alt="logo-image" loading='lazy' width={150}/></a>

        <nav>
            <ul className='navigation-list d-flex align-items-center m-0 list-unstyled gap-3'>
                <li><a href="#"><TbBrandGoogleHome className='mb-1' />Dashboard</a></li>
                <li><a href="#"><IoTicketOutline className='mb-1' />Saved Location</a></li>
                <li><a href="#"><IoIosTimer className='mb-1' />Hourly Forecast</a></li>
                <li><a href="#"><MdTimeline className='mb-1' />10 days forecast</a></li>
                <li><a href="#"><TbMapSearch className='mb-1' />Maps</a></li>
            </ul>
        </nav>

        <a href="#" className="theme-change">
            <div className="toggle-switch">
            <BsFillMoonStarsFill />
            <MdWbSunny  className='fs-5'/>
            </div>
        </a>
        
    </header>
  )
}

export default Header
