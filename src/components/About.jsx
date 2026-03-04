"use client";

import { motion } from 'framer-motion';

import { styles } from '../style';
import { services as fallbackServices } from '../constants';
import { fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc';
import { getIcon } from '../utils/iconMap';
import useTilt from '../hooks/useTilt';

const ServiceCard = ({index, title, Icon, link }) => {
  const tiltRef = useTilt({ max: 30, speed: 300, glare: true, "max-glare": 0.2 });

  return (
    <div ref={tiltRef} className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
        onClick={() => window.open(link, "_blank")}
        >
          <div
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly
              items-center flex-col'
          >
            {Icon && <Icon className='w-16 h-16 object-contain' />}
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </div>
  )
}

const FALLBACK_ABOUT = `Hi there. I'm Hassan, a Computer Science student, Head Teaching Assistant and Undergraduate Researcher at Dalhousie University with a strong passion for problem solving and teaching. I have interned at Activision and Synopsys as a Software Engineer and have done research at Dalhousie in AI. I am also a competitive programmer competing in ICPC.`;

const About = ({ aboutText, socialLinks }) => {
  const resolvedAbout = aboutText || FALLBACK_ABOUT;

  const resolvedServices = socialLinks?.length
    ? socialLinks.map((link) => ({
        title: link.title,
        Icon: getIcon(link.iconName),
        link: link.url,
      }))
    : fallbackServices;

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        {resolvedAbout}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {resolvedServices.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")