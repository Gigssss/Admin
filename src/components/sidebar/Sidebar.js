import React, { useState } from 'react';
import { FaBars }from "react-icons/fa";
import Dashboard from '../../assets/image/dashboard.png';
import Clipboard from '../../assets/image/clipboard.png'
import Logout from '../../assets/image/log-out.png'
import Setting from '../../assets/image/setting.png'
import Website from '../../assets/image/website.png'
import ImgProfile from '../../assets/image/foto firman di pik.jpg'
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<img src={Dashboard} alt="logo-hta" height="30" width="30"/>
        },
        {
            path:"/work-order",
            name:"Work Order",
            icon:<img src={Clipboard} alt="logo-hta" height="30" width="30"/>
        },
        {
            path:"/register-user",
            name:"Register User",
            icon:<img src={Website} alt="logo-hta" height="30" width="30"/>
        },
        {
            path:"/settings",
            name:"Setting",
            icon:<img src={Setting} alt="logo-hta" height="30" width="30"/>
        },
        {
            path:"/product",
            name:"Log Out",
            icon:<img src={Logout} alt="logo-hta" height="30" width="30"/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo-hta">HTA</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               <div className="profile-sidebar">
                    <img style={{display: isOpen ? "block" : "none"}} src={ImgProfile} width="90" height="90" />
                    <h2 style={{display: isOpen ? "block" : "none"}}>pirman yang punya PIK</h2>
                    <p style={{display: isOpen ? "block" : "none"}}>pirmangans@gmail.com</p>
                </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;