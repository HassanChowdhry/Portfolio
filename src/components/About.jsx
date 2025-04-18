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
        I'm a Software Engineer based in Vancouver, Canada, with a degree in Software Engineering from McMaster University. I specialize in backend distributed systems in cloud-native environments, but my experience spans the full stack — from mobile and web development to DevOps and site reliability engineering.
        <br/><br/>
        Over the years, I’ve worn many hats outside: freelancer, software entrepreneur, open source contributor, and lifelong learner. I've led client projects from concept to production, built internal tools that scaled, and contributed to public codebases that others rely on. My technical foundation is rock-solid, and I’m constantly evolving — keeping up with the latest in software architecture, development practices, and now, diving deep into AI/ML.
        <br/><br/>
        Whether it’s building reliable systems, solving complex engineering challenges, or exploring emerging technologies, I bring a high standard of craftsmanship and curiosity to everything I do. For me, software isn’t just a career — it’s a craft I’m committed to advancing.
        <br/><br/>
        My interests extend well beyond the screen. I’m an avid mountaineer, history enthusiast and aspiring writer.
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