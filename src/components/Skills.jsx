import { styles } from '../style';
import { Wrapper } from './Wrapper';

const Skills = ({title, skill, index, fade}) => {
  return (
    <div className='overflow-hidden'>
      <Wrapper fade={fade} type="tween" index={index} className="py-5">
        <h1 className={`${styles.heroSubText} my-4`}>{title}</h1>
        <div className="flex flex-row flex-wrap justify-left gap-10">
          {skill.map(({name, icon, color}) => (
            <div key = {name} 
              className={`w-48 tech h-auto bg-[#DADADB] ${color} rounded-lg text-center
              text-[#1D1E20] p-2 gap-1 flex items-center justify-center `}>
              
              <img 
                alt={name} src={icon}
                loading="lazy"
                className=" h-8"
              />
              <p>
                {name}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default Skills