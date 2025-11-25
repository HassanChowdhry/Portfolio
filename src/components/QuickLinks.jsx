import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { IoIosContact, IoIosContacts } from "react-icons/io";
import { MdSchedule, MdScheduleSend } from "react-icons/md";

const QuickLinks = () => {  
  return (
    <div className='flex gap-5 flex-col md:flex-row'>
        <motion.div variants={fadeIn("up", "tween", 1*0.5, 1)} >
          <a href='#contact'>
            <button className="animated-button w-full">
              <IoIosContacts className="arr-2" />
              <span className="text">Contact Me</span>
              <span className="circle"></span>
              <IoIosContact className="arr-1" />
            </button>
          </a>
        </motion.div>
        {/* <motion.div variants={fadeIn("up", "tween", 2*0.5, 1)}>
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
        </motion.div> */}
        <motion.div variants={fadeIn("up", "tween", 2*0.5, 1)} >
          {/* <Link to='/meeting'> */}
          <a target='blank' href="https://zcal.co/hassanchowdhry/30min">
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