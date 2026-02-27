"use client";

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { IoIosContact, IoIosContacts } from "react-icons/io";
import { MdSchedule, MdScheduleSend } from "react-icons/md";
import { HiOutlineDocumentText, HiDocumentText } from "react-icons/hi2";
import { LuFileText, LuFileCheck } from "react-icons/lu";

const QuickLinks = () => {  
  return (
    <div className='flex gap-5 flex-col md:flex-row flex-wrap'>
        {/* <motion.div variants={fadeIn("up", "tween", 1*0.5, 1)} >
          <a href='#contact'>
            <button className="animated-button w-full">
              <IoIosContacts className="arr-2" />
              <span className="text">Contact Me</span>
              <span className="circle"></span>
              <IoIosContact className="arr-1" />
            </button>
          </a>
        </motion.div> */}
        <motion.div variants={fadeIn("up", "tween", 1*0.5, 1)} >
          <a target='_blank' rel="noopener noreferrer" href="/resume.pdf">
            <button className="animated-button w-full">
              <HiDocumentText className="arr-2" />
              <span className="text">View Resume</span>
              <span className="circle"></span>
              <HiOutlineDocumentText className="arr-1" />
            </button>
          </a>
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 2*0.5, 1)} >
          <a target='_blank' rel="noopener noreferrer" href="/transcript.pdf">
            <button className="animated-button w-full">
              <LuFileCheck className="arr-2" />
              <span className="text">View Transcript</span>
              <span className="circle"></span>
              <LuFileText className="arr-1" />
            </button>
          </a>
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 3*0.5, 1)} >
          <a target='_blank' rel="noopener noreferrer" href="https://zcal.co/hassanchowdhry/30min">
            <button className="animated-button w-full">
              <MdScheduleSend className="arr-2" />
              <span className="text">Schedule A Meeting</span>
              <span className="circle"></span>
              <MdSchedule className="arr-1" />
            </button>
          </a>
        </motion.div>
      </div>
  )
};

export default QuickLinks;