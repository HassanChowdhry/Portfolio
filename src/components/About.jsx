import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, Icon, link }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
        onClick={() => window.open(link, "_blank")}
        >
          <div options={{ max:45, scale: 1, speed: 450 }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly
              items-center flex-col'
          >
            <Icon className='w-16 h-16 object-contain' />
            {/* <img src={icon} alt={title} className='w-16 h-16 object-contain'/> */}
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
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
        Hi there. I&apos;m Hassan, a Computer Science student, Head Teaching 
        Assistant and Undergraduate Researcher at Dalhousie University with a
        strong passion for problem solving and teaching. I have interned at Activision
        and Synopsys as a Software Engineer and have done research at Dalhousie in AI. 
        I am also a competitive programmer competing in ICPC.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")