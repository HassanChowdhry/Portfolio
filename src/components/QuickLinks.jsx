import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { SiOpenai } from "react-icons/si";
import { Link } from 'react-router-dom';
import { MdSchedule, MdScheduleSend } from "react-icons/md";

const QuickLinks = () => {  
  return (
    <div className='flex gap-5 flex-col md:flex-row'>
        <motion.div variants={fadeIn("up", "tween", 1*0.5, 1)} >
          <Link to='/ai'>
            <button className="animated-button w-full">
              <SiOpenai className="arr-2" />
              <span className="text">Talk to Bilal AI</span>
              <span className="circle"></span>
              <SiOpenai className="arr-1" />
            </button>
          </Link>
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 2*0.5, 1)}>
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
        <motion.div variants={fadeIn("up", "tween", 3*0.5, 1)} >
          {/* <Link to='/meeting'> */}
          <a target='blank' href="https://calendly.com/bilal-ishtiaque-7/30min">
            <button className="animated-button w-full">
              <MdScheduleSend className="arr-2" />
              <span className="text">Schedule A Meeting</span>
              <span className="circle"></span>
              <MdSchedule className="arr-1" />
            </button>
          </a>
          {/* </Link> */}
        </motion.div>
      </div>
  )
};

export default QuickLinks;