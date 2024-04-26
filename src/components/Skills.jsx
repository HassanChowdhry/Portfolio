import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'
import { styles } from '../style';

const Skills = ({title, skill, index, fade}) => {
  return (
    <motion.div variants={fadeIn(`${fade}`, "tween", index*0.4, 0.75)} className={`py-5`}>
      <h1 className={`${styles.heroSubText} my-4`}>{title}</h1>
      <div className="flex flex-row flex-wrap justify-left gap-10">
        {skill.map(({name, icon, color}) => (
          <div key = {name} 
            className={`w-48 tech h-auto bg-[#DADADB] ${color} rounded-lg text-center
            text-[#1D1E20] p-2 gap-1 flex items-center justify-center `}>
            
            <img alt={name} src={icon}
              className="w-8 h-8"/>
            <p>
              {name}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills