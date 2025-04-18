import {useState} from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close, resume } from '../assets';

const Navbar = () => {
const [active, setActive] = useState("");
const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' loading="lazy" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Bilal Ishtiaque&nbsp; </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map(({ id, title}) => (
            <li 
              key={id}
              className={`${active === title ? "text-white": "text-secondary"} 
                hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(title)}
            >
              
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
          <li 
            key="resume"
            className={`${active === "resume" ? "text-white": "text-secondary"} 
              hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("resume")}
          >
            {/* TODO: Implement me! */}
            <a href={resume} download="Hassan_Resume">Resume</a> 
          </li>
        </ul>
  
        <div className='sm:hidden flex felx-1 justify-end items-center'>
          <img loading="lazy" src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}></img>
          <div 
            className={`${!toggle ? 'hidden' : 'flex'} 
              p-6 top-20 black-gradient absolute right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map(({ id, title}) => (
                <li 
                  key={id}
                  className={`${active === title ? "text-white": "text-secondary"} 
                    font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(title);
                  }}
                >
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}

              <li 
                key="resume"
                className={`${active === "resume" ? "text-white": "text-secondary"} 
                  font-poppins text-[16px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("resume");
                }}
              >
                {/* TODO: Implement me! */}
                <a href={resume} download="Hassan_Resume">Resume</a>
              </li>              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar