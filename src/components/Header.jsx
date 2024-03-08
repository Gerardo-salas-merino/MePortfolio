
import { Bars3Icon, XMarkIcon, } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import { FaCode } from "react-icons/fa6";


const Header = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("theme")) ?? false);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark]);

  //usamos un useEffect para guardar el modo dark en el localstorage
  useEffect(() => {
    
    localStorage.setItem("theme", JSON.stringify(isDark));
    
  }, [isDark])
  
  

  let Links = [
    { name: "Inicio", link: "home" },
    { name: "Sobre mi", link: "about" },
    { name: "Proyectos", link: "projects" },
    { name: "Contacto", link: "contact" },

    
    
  ];
  
  let [open, setOpen] = useState(false);

  return (
    <div className={`w-full relative z-[100] `}>
      <div className={` dark:bg-bodyback dark:text-white md:flex items-center justify-between bg-white py-4 md:px-14 px-7 fixed top-0 left-0 right-0 dark:shadow-2xl shadow-xl transition-colors `}>

        {/* logo section */}
        <div className="font-bold text-2xl tracking-wide flex items-center lg:w-[28rem] md:bg-transparent justify-between md:w-[15rem] w-[72%]">
          <div className="flex">
            <FaCode size={30} style={{color: '#f06'}}/>
            <span className="md:ml-1 ml-2">LALO.DEV</span>
          </div>
          

          <button 
            onClick={handleToggleTheme}
            className='text-blue-500 hover:text-black dark:hover:text-white items-center border-2 rounded-md p-1 transition-colors' 
          >
            {isDark ? <IconSunFilled/> : <IconMoonFilled/>}
              
          </button>
        
        </div>


        

        






        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-primary dark:text-white dark:bg-bodyback"
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        {/* linke items */}
        <ul
          className={`md:flex md:items-center items-center md:pb-0 absolute md:static  md:z-auto z-50 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0  dark:bg-[#3a3a3aa6] lg:dark:bg-transparent transition-all ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (

            <li 
              className="md:ml-8 md:my-0 mt-5 font-semibold text-xl border-b-2 md:border-b-0 text-right px-7 md:px-4 pb-4 md:pb-0 cursor-pointer dark:text-white  " 
              key={link.name}
            >


              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
