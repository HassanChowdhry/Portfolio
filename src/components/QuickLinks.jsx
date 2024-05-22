import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { FaArrowDown, FaDownload } from "react-icons/fa";
import { resume } from '../assets';

const QuickLinks = () => {  
  return (
    <div className='flex gap-5 flex-col md:flex-row'>
        {/* add buttons to Contact / About / Resume */}
        <motion.div variants={fadeIn("up", "tween", 1*0.8, 1.8)} >
          <a href='#about'>
            <button className="animated-button w-full lg:animated-button">
              <FaArrowDown className="arr-2" />
              <span className="text">About Me</span>
              <span className="circle"></span>
              <FaArrowDown className="arr-1" />
            </button>
          </a>
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 2*0.8, 1.8)}>
        <a href={resume} download="HassanChowdhry_Resume">
          <button className="animated-button w-full lg:animated-button">
            <FaDownload className="arr-2" />
            <span className="text">Resume</span>
            <span className="circle"></span>
            <FaDownload className="arr-1" />
          </button>
        </a>
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 3*0.8, 1.8)}>
          <a href='#contact'>
            <div className="box">
              <button className="button">Contact Me</button>
              <div className="space">
                <span style={{'--i': 31}} className="star"></span>
                <span style={{'--i': 12}} className="star"></span>
                <span style={{'--i': 57}} className="star"></span>
                <span style={{'--i': 93}} className="star"></span>
                <span style={{'--i': 23}} className="star"></span>
                <span style={{'--i': 70}} className="star"></span>
                <span style={{'--i': 6}} className="star"></span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
  )
};

export default QuickLinks;