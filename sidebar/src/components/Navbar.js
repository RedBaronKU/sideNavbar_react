import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import {Sidebardata} from './Sidebardata';
import './Navbar.css'
function Navbar() {
    const[sidebar,setSidebar]=useState(false);
    const sidebarfunc = () =>
    {
        setSidebar(!sidebar);
    }
    return (
        <div>
            <div className="navbar">
                <Link to="#" className="sidebar_toggle" onClick={sidebarfunc}>
                    <FaIcons.FaBars/>
                    {console.log(sidebar)}
                </Link>
            </div>
            <nav className={sidebar?"sidebar active":"sidebar"}>
                <ul className="sidebar_items">
                    {Sidebardata.map((items,index)=>{
                        return(    
                        <li key={index} className={items.cname}>
                            <Link to={items.link} className="menu_text">
                                {items.icon}
                                <span >{items.title}</span>
                            </Link>
                        </li>
                        )
                })}
                </ul>
            </nav>            
        </div>
    )
}

export default Navbar
