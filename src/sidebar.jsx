/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

 function Sidebar({ openSidebarToggle, toggleSidebar }) {
    return (
        <aside id="sidebar" className=  {openSidebarToggle ? "sidebar-responsive" : ""} >
            <div className='sidebar-title  '>
                <div className='sidebar-brand'>
                    <i className="fa-solid fa-chart-line"></i> Dashboard
                </div>
                <span className='icon close_icon' onClick={toggleSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                         Overview
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                       Products
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                      Categories
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                      Customers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                         Inventory
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                    Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                       Setting
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar