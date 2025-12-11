import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom"; 
import Logo from "../../public/m gra 2 150.svg";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
      
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Services", path: "/services" }, 
        { name: "Works", path: "/works" },
        { name: "Contact", path: "/contact" },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
 <header className="bg-primary text-green-2 fixed w-full z-50 shadow-lg">
     <div className='center-container sm:px-6 lg:px-8 py-2 '> 
         <nav className="flex justify-between items-center">
             <Link to="/" className="w-[50px] overflow-hidden"> 
                 <img src={Logo} alt="MS Logo" />
             </Link>
             <div className="lg:hidden z-20">
                 <button onClick={toggleMenu} className="text-secondry focus:outline-none">
                     {isOpen ? (
                         <FaTimes size={24} className="text-green-1 hover:text-white-b" />
                     ) : (
                         <FaBars size={24} className="text-green-1 hover:text-white-b" />
                     )}
                 </button>
             </div>

             <ul className="hidden lg:flex space-x-6 list-none p-0 m-0">
                 {navItems.map((item) => (
                     <li key={item.name}>
                         <Link
                             to={item.path}
                             className="text-sm text-white-a font-medium hover:text-green-1 transition duration-300"
                         >
                             {item.name}
                         </Link>
                     </li>
                 ))}
             </ul>
         </nav>
     </div>

     <nav 
         className={`
             lg:hidden absolute top-0 left-0 w-full h-screen bg-primary/95 backdrop-blur-sm transform transition-transform duration-300 z-10
             ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
         onClick={closeMenu} 
     >
         <ul className="flex flex-col items-center justify-center h-full space-y-8 pt-16">
             {navItems.map((item) => (
                 <li key={item.name}>
                           
                     <Link
                         to={item.path}
                         onClick={closeMenu} 
                         className="text-2xl font-bold text-white-b transition duration-300 block hover:text-green-1 "
                     >
                         {item.name }
                     </Link>
                 </li>
             ))}
         </ul>
     </nav>
            
 </header> );
};

export default Header;