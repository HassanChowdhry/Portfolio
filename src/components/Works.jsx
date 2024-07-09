import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { Wrapper } from './Wrapper';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
  return (
    <Wrapper index={index} fade="up" type="spring" >
      <Tilt options={{
        max: 45, scale: 1, speed: 450
      }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full image-box"
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image} 
            alt={name} 
            className='w-full h-full object-cover rounded-2xl portfolio-image'
            loading="lazy"
          />
          <div className='absolute flex inset-0 justify-end m-3 card-img_hover'>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[16px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
        </div>
        <div className='content'>
          <button
            className="btn"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            Github
          </button>
          <button
            className="btn"
            onClick={() => window.open(demo_link, "_blank")}
          >
            Live Demo
          </button>
        </div>
      </Tilt>
    </Wrapper>
  )
};

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Personal Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>
      
      <div>
        <motion.p 
          className='mt-3 text-secondary text=[17px] max-w-3xl leading-[30px]'
        >
          Projects that I have worked on.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")