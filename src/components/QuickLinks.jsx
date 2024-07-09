import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { SiOpenai } from "react-icons/si";
import { Link } from 'react-router-dom';
// import { resume } from '../assets';

const QuickLinks = () => {  
  return (
    <div className='flex gap-5 flex-col md:flex-row'>
        <motion.div variants={fadeIn("up", "tween", 1*0.5, 1.8)} >
          <Link to='/ai'>
            <button className="animated-button w-full">
              <SiOpenai className="arr-2" />
              <span className="text">Talk to Hassan AI</span>
              <span className="circle"></span>
              <SiOpenai className="arr-1" />
            </button>
          </Link>
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 2*0.5, 1.8)}>
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