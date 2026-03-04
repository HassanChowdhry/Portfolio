"use client";

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { MdSchedule, MdScheduleSend } from "react-icons/md";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { LuFileText, LuFileCheck } from "react-icons/lu";

const QuickLinks = ({ resumeUrl, transcriptUrl, meetingLink }) => {
  const resolvedResume = resumeUrl || "/resume.pdf";
  const resolvedTranscript = transcriptUrl || "/transcript.pdf";
  const resolvedMeeting = meetingLink || "https://zcal.co/hassanchowdhry/30min";

  return (
    <div className='flex gap-5 flex-col md:flex-row flex-wrap'>
        <motion.div variants={fadeIn("up", "tween", 1*0.5, 1)} >
          <a target='_blank' rel="noopener noreferrer" href={resolvedResume}>
            <button className="animated-button w-full">
              <HiOutlineDocumentArrowDown className="arr-2" />
              <span className="text">View Resume</span>
              <span className="circle"></span>
              <HiOutlineDocumentArrowDown className="arr-1" />
            </button>
          </a>
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 2*0.5, 1)} >
          <a target='_blank' rel="noopener noreferrer" href={resolvedTranscript}>
            <button className="animated-button w-full">
              <LuFileCheck className="arr-2" />
              <span className="text">View Transcript</span>
              <span className="circle"></span>
              <LuFileText className="arr-1" />
            </button>
          </a>
        </motion.div>
        <motion.div variants={fadeIn("up", "tween", 3*0.5, 1)} >
          <a target='_blank' rel="noopener noreferrer" href={resolvedMeeting}>
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