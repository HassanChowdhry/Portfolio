import { SectionWrapper } from "../hoc"
import { languages, frameworks, libraries, devops, tools, testing } from "../constants"
import Skills from "./Skills" 

const Tech = () => {
  return (
    <div className="h-full">
      <Skills fade="right" index="0" title="Languages" skill={languages} /> 
      <Skills fade="left" index="1" title="Frameworks" skill={frameworks} /> 
      <Skills fade="right" index="2" title="Libraries" skill={libraries} /> 
      <Skills fade="left" index="3" title="Testing" skill={testing} /> 
      <Skills fade="right" index="4" title="Devops/Cloud" skill={devops} /> 
      <Skills fade="left" index="5" title="Developer Tools" skill={tools} /> 
    </div>
  )
}

export default SectionWrapper(Tech, "tech")