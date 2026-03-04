"use client";

import { motion } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { projects as fallbackProjects } from '../constants';
import { Wrapper } from './Wrapper';
import { urlFor } from '@/sanity/client';
import useTilt from '../hooks/useTilt';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, sourceCodeLink, demo_link, demoLink }) => {
  const imageSrc = image?.asset
    ? urlFor(image).width(720).url()
    : image;

  const resolvedSourceLink = source_code_link || sourceCodeLink;
  const resolvedDemoLink = demo_link || demoLink;
  const tiltRef = useTilt({ max: 15, speed: 400, glare: true, "max-glare": 0.1 });

  return (
    <Wrapper index={index} fade="up" type="spring" >
      <div
        ref={tiltRef}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full image-box"
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={imageSrc} 
            alt={name} 
            className='w-full h-full object-fill rounded-2xl portfolio-image'
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
            onClick={() => window.open(resolvedSourceLink, "_blank")}
          >
            Github
          </button>
          <button
            className="btn"
            onClick={() => window.open(resolvedDemoLink, "_blank")}
          >
            Live Demo
          </button>
        </div>
      </div>
    </Wrapper>
  )
};

const Works = ({ projects: cmsProjects }) => {
  const resolvedProjects = cmsProjects?.length
    ? cmsProjects
    : fallbackProjects;

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
        {resolvedProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")