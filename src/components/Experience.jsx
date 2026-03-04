"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../style';
import { experiences as fallbackExperiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { urlFor } from '@/sanity/client';

const ExperienceCard = ({ experience }) => {
  const iconSrc = experience.icon?.asset
    ? urlFor(experience.icon).width(100).url()
    : experience.icon;

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date || experience.dateRange}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden">
          <img 
            src={iconSrc}
            alt={experience.company_name || experience.companyName}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p style={{ margin: 0 }} className="text-secondary text-[16px] font-semibold">
          {experience.company_name || experience.companyName}
        </p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
}

const Experience = ({ experiences: cmsExperiences }) => {
  const resolvedExperiences = cmsExperiences?.length
    ? cmsExperiences
    : fallbackExperiences;

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Professional Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {resolvedExperiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")